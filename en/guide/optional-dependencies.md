<script setup>
import DemoContainer from "../../components/DemoContainer.vue";
import NumberAdapterDemo from "../../components/NumberAdapterDemo.vue";
import StringAdapterDemo from "../../components/StringAdapterDemo.vue";
</script>

# Optional Dependencies {#optional-dependencies}

## Character Length Limit {#character-length-limit}

> TL;DR: [Solution](#how-to-remove-character-length-limit).

`TimeredCounter` works by treating strings as numbers in a certain base and then converting them to decimal numbers. This approach is convenient for sampling numbers to create scrolling lists.

This method works in most cases, but problems arise when the numbers are too large or too small.

According to the ECMA specification, when `number < 10^-5 || number > 10^21`, numbers are represented in scientific notation[^1][^2].

This causes a problem as numbers represented in scientific notation lose some precision.

```
    1234567891012131415161
=>  1.2345678910121315e+21 // lost precision for the last 6 digits
```

Due to the implementation, this issue is more likely to occur with `timered-counter-string`.
The base is essentially the number of unique characters in the string, which can easily result in a number exceeding `10^21`.

Similarly, when using `timered-counter-number`, if the value is less than `10^-5`, the number will also be represented in scientific notation.

### How to Remove Character Length Limit {#how-to-remove-character-length-limit}

To solve this problem, we need to use a third-party high-precision calculation library like [decimal.js](https://mikemcl.github.io/decimal.js). `TimeredCounter` provides two adapters:

1. `BuildInNumberAdapter` (default): Uses `Number`.

2. `DecimalJsAdapter`: Uses `decimal.js`, requires installing [decimal.js](https://mikemcl.github.io/decimal.js).
3. Of course, you can implement your own adapter by implementing the `NumberAdapter` interface.

In the example below, you can switch adapters to see the effect.

> `{{ Number.MAX_SAFE_INTEGER }}` is the largest integer that can be accurately represented in JavaScript. When the value exceeds this, precision is lost. You can try inputting:
>
> 1. `{{ BigInt(Number.MAX_SAFE_INTEGER) + 1n }}`: {{ Number.MAX_SAFE_INTEGER }} **+ 1**
> 2. `{{ BigInt(Number.MAX_SAFE_INTEGER) + 10n }}`: {{ Number.MAX_SAFE_INTEGER }} **+ 10**
> 3. `{{ BigInt(Number.MAX_SAFE_INTEGER) + 100n }}`: {{ Number.MAX_SAFE_INTEGER }} **+ 100**
>
> Observe the precision loss.

<DemoContainer title="Number Adapter">
<NumberAdapterDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/NumberAdapterDemo.vue{vue} [NumberAdapterDemo.vue]
:::
</DemoContainer>

## Support Emoji Segmentation {#support-emoji-segmentation}

For general `emoji`, we can use the default configuration, but for some **special** `emoji`, like `👨‍👩‍👧‍👦`, which are called `Emoji ZWJ Sequence` and are composed of multiple `emoji`.

In this case, it is difficult to correctly recognize strings containing such `emoji`. We can use [Intl.Segmenter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) or third-party libraries like [grapheme-splitter](https://github.com/orling/grapheme-splitter). `TimeredCounter` provides three adapters:

1. `BuildInStringAdapter` (default): Uses `String.split("")` to split strings.
2. `IntlSegmenterAdapter`: Uses `Intl.Segmenter`, requires browser support.
3. `GraphemeSplitterAdapter`: Uses `grapheme-splitter`, requires installing [grapheme-splitter](https://github.com/orling/grapheme-splitter).

In the example below, you can switch adapters to see the effect.

> You can try inputting the following characters to see the effect.
>
> - `⌚`: Basic emoji
> - `↔️`: Text character rendered as emoji
> - `👩`: Modifiable basic emoji
> - `👩🏿`: Modifiable basic emoji + emoji modifier
> - `🧑‍💻`: Emoji combination sequence

<DemoContainer title="String Adapter">
<StringAdapterDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/StringAdapterDemo.vue{vue} [StringAdapterDemo.vue]
:::
</DemoContainer>

[^1]: https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numeric-types-number-tostring

[^2]: https://medium.com/@anna7/large-numbers-in-js-4feb6269d29b
