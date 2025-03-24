# Getting Started {#getting-started}

## Installation {#installation}

### Prerequisites {#prerequisites}

::: code-group

```shell [npm]
$ npm install timered-counter --save
```

```shell [pnpm]
$ pnpm add timered-counter
```

```shell [yarn]
$ yarn add timered-counter
```

:::

::: tip Note
TimeredCounter currently has two optional dependencies that are not installed by default due to their large size. You can install them manually if needed.

- **decimal.js**: Decimal.js provides nearly unlimited precision for handling large numbers/high-precision floating-point calculations. [When to use it](optional-dependencies#character-length-limit)

  ![npm bundle size](https://img.shields.io/bundlephobia/min/decimal.js?style=flat-square)

- **grapheme-splitter**: Grapheme-splitter can correctly split strings containing emojis. [When to use it](optional-dependencies.md#support-emoji-segmentation)

  ![npm bundle size](https://img.shields.io/bundlephobia/min/grapheme-splitter?style=flat-square)
  :::

## Import via Module {#import-via-module}

::: code-group
```javascript [main.js/main.ts]
import "timered-counter";
```
:::

## Import via CDN {#import-via-cdn}

You can use TimeredCounter directly via CDN with the `<script>` tag:

::: code-group
```html [unpkg]
<script src="https://unpkg.com/timered-counter/dist/timered-counter.global.js"></script>
```
```html [jsdelivr]
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.global.js"></script>
```
:::

Here we use unpkg, but you can use any CDN that provides npm packages, such as [jsdelivr](https://www.jsdelivr.com/package/npm/vue) or [cdnjs](https://cdnjs.com/libraries/vue). Of course, you can also download this file and serve it yourself.

Using TimeredCounter via CDN does not involve a "build step". This makes setup simpler and can be used to enhance static HTML.

### Using the Global Build Version {#global-build}
The above links use the global build version of TimeredCounter, where all top-level APIs are exposed as properties on the global TimeredCounter object. Here is an example of using the global build version:

```html
...
<script src="https://unpkg.com/timered-counter/dist/timered-counter.global.js"></script>
<script>
  const { setNumberAdapter } = TimeredCounter;
  setNumberAdapter('decimal.js')
</script>

<div style="font-size: 36px; text-align: center;">
  <timered-counter-string value="9007199254741001" initial-value="24"></timered-counter-string>
</div>
```

### Using the ES Module Build Version {#es-module-build}
In the rest of this document, we mainly use ES module syntax. Most modern browsers natively support ES modules. Therefore, we can use TimeredCounter via CDN and native ES modules like this:

```html
...
<script type="module">
  import { setNumberAdapter } from "https://unpkg.com/timered-counter/dist/timered-counter.esm-browser.js";

  setNumberAdapter('decimal.js')
</script>

<div id="demo" style="font-size: 36px; text-align: center;">
  <timered-counter-string value="9007199254741001" initial-value="24"></timered-counter-string>
</div>
```
Note that we use `<script type="module">` and the CDN URL points to the ES module build version of TimeredCounter.

## Usage {#usage}

You only need to update the value, and `TimeredCounter` will handle the rest automatically.

<blockquote class="text-xs">
`TimeredCounter` is like this, you just need to update the value, but `TimeredCounter` has to consider many things. XD
</blockquote>

Below is a simple example where `TimeredCounter` will automatically respond to changes in the number and handle the increment/decrement animation.

<script setup>
import GettingStartedDemo from "../../components/GettingStartedDemo.vue";
import DemoContainer from "../../components/DemoContainer.vue";

</script>

<DemoContainer title="Getting Started">
<GettingStartedDemo />
<hr />

::: code-group
<<< @/components/GettingStartedDemo.vue#html{html} [HTML]
<<< @/components/GettingStartedDemo.vue#js{js} [JS]
<<< @/components/GettingStartedDemo.vue{vue} [All]
:::
</DemoContainer>

## Next Steps {#next}

- Want to see more examples of `TimeredCounter`? Check out [Examples](./examples/simple-usage).
- Want to learn about `TimeredCounter` configuration options? Check out [Configuration and API](../reference/api).
- Want to explore more possibilities with `TimeredCounter` styles and animations, such as achieving [this](./examples/logo) effect? You can start from [In-Depth TimeredCounter](./timered-counter-in-depth).
