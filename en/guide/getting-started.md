# Getting Started {#getting-started}

::: tip Note
TimeredCounter currently has two optional dependencies. Considering their large size, they are not installed by default. You can manually install them as needed.

- **decimal.js**: Decimal.js provides almost unlimited precision for handling large numbers/high-precision floating-point calculations. [How to use ->](optional-dependencies#character-length-limit)
- **grapheme-splitter**: grapheme-splitter can correctly split strings containing emojis. [How to use ->](optional-dependencies.md#support-emoji-segmentation)

**In each usage method below, we will provide instructions on how to install these two dependencies.**
:::

## Import via Module {#import-via-module}

### Installation {#installation}
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

### Import {#import}

```javascript
import "timered-counter";
```

#### Optional Dependencies
::: details Install `decimal.js` Number Adapter
If you need to use the `decimal.js` based number adapter, please install it first:
```shell
npm install decimal.js --save
```
Then import it in your code:
```javascript
import DecimalJsAdapter from "timered-counter/dist/src/number-adapter/decimal.js";
import { TimeredCounterAdapter } from "timered-counter";

TimeredCounterAdapter.registryAdapter(DecimalJsAdapter); // Register adapter
TimeredCounterAdapter.setNumberAdapter('decimal.js'); // Set the adapter to use
```
:::

::: details Install `grapheme-splitter` String Adapter
If you need to use the `grapheme-splitter` based string adapter, please install it first:
```shell
npm install grapheme-splitter --save
```
Then import it in your code:
```javascript
import GraphemeSplitterAdapter from "timered-counter/dist/src/string-adapter/grapheme-splitter.js";
import { TimeredCounterAdapter } from "timered-counter";

TimeredCounterAdapter.registryAdapter(GraphemeSplitterAdapter); // Register adapter
TimeredCounterAdapter.setStringAdapter('grapheme-splitter'); // Set the adapter to use
```
:::

## Import via CDN {#import-via-cdn}

You can use TimeredCounter directly via CDN with the `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.global.js"></script>
```

Here we use [jsdelivr](https://jsdelivr.com), but you can also use any CDN that provides npm packages, such as [unpkg](https://unpkg.com/timered-counter) or [cdnjs](https://cdnjs.com/libraries/timered-counter). Of course, you can also download this file and serve it yourself.

Using TimeredCounter via CDN does not involve a "build step". This makes setup simpler and can be used to enhance static HTML.

### Using Global Build Version {#global-build}
The above link uses the global build version of TimeredCounter, where all top-level APIs are exposed as properties on the global TimeredCounter object. Here is an example of using the global build version:

```html
...
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.global.js"></script>

<div style="font-size: 36px; text-align: center;">
  <timered-counter-string value="123456789" initial-value="0"></timered-counter-string>
</div>
```

#### Optional Dependencies
::: details Add `decimal.js` Number Adapter
If you need to use the `decimal.js` based number adapter, please add the following `<script>` tag first:
```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/decimal-js-number-adapter.global.js"></script>
```
Then import it in your code:
```javascript
TimeredCounter.TimeredCounterAdapter.registryAdapter(TimeredCounterExternal.DecimalJsNumberAdapter); // Register adapter
TimeredCounter.TimeredCounterAdapter.setNumberAdapter('decimal.js'); // Set the adapter to use
```
:::

::: details Add `grapheme-splitter` String Adapter
If you need to use the `grapheme-splitter` based string adapter, please add the following `<script>` tag first:
```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/grapheme-splitter-string-adapter.global.js"></script>
```
Then import it in your code:
```javascript
TimeredCounter.TimeredCounterAdapter.registryAdapter(TimeredCounterExternal.GraphemeSplitterAdapter); // Register adapter
TimeredCounter.TimeredCounterAdapter.setStringAdapter('grapheme-splitter'); // Set the adapter to use
```
:::

::: details File Size
<div class="text-nowrap">

| File Name                       | raw                                                  | gzip             | brotli           | deflate          |
|---------------------------|------------------------------------------------------|------------------|------------------|------------------|
| timered-counter.global.js  | {{ filesize(umd['timered-counter.global.js'].raw) }} | {{ filesize(umd['timered-counter.global.js'].gzip) }} | {{ filesize(umd['timered-counter.global.js'].brotli) }} | {{ filesize(umd['timered-counter.global.js'].deflate) }} |
| decimal-js-number-adapter.global.js  | {{ filesize(umd['decimal-js-number-adapter.global.js'].raw) }} | {{ filesize(umd['decimal-js-number-adapter.global.js'].gzip) }} | {{ filesize(umd['decimal-js-number-adapter.global.js'].brotli) }} | {{ filesize(umd['decimal-js-number-adapter.global.js'].deflate) }} |
| grapheme-splitter-string-adapter.global.js | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].raw) }} | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].gzip) }} | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].brotli) }} | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].deflate) }} |

</div>
:::

### Using ES Module Build Version {#es-module-build}
In the rest of this document, we mainly use ES module syntax. Most modern browsers natively support ES modules. Therefore, we can use TimeredCounter via CDN and native ES modules like this:

```html
...
<script type="module" src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.esm-browser.js"></script>

<div id="demo" style="font-size: 36px; text-align: center;">
  <timered-counter-string value="123456789" initial-value="0"></timered-counter-string>
</div>
```
Note that we use `<script type="module">`, and the imported CDN URL points to the ES module build version of TimeredCounter.

#### Optional Dependencies
::: details Add `decimal.js` Number Adapter
If you need to use the `decimal.js` based number adapter, please modify the code as follows:
```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/decimal-js-number-adapter.esm-browser.js"></script> <!--[!code --]-->

<script type="module">
  import { TimeredCounterAdapter } from 'https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.esm-browser.js'; // [!code ++]
  import DecimalJsNumberAdapter from 'https://cdn.jsdelivr.net/npm/timered-counter/dist/decimal-js-number-adapter.esm-browser.js'; // [!code ++]
// [!code ++]
  TimeredCounterAdapter.registryAdapter(DecimalJsNumberAdapter); // [!code ++]
  TimeredCounterAdapter.setNumberAdapter('decimal.js'); // [!code ++]
</script>
```
:::

::: details Add `grapheme-splitter` String Adapter
If you need to use the `grapheme-splitter` based string adapter, please modify the code as follows:
```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/decimal-js-number-adapter.esm-browser.js"></script> <!--[!code --]-->

<script type="module">
  import { TimeredCounterAdapter } from 'https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.esm-browser.js'; // [!code ++]
  import GraphemeSplitterStringAdapter from 'https://cdn.jsdelivr.net/npm/timered-counter/dist/grapheme-splitter-string-adapter.esm-browser.js'; // [!code ++]
// [!code ++]
  TimeredCounterAdapter.registryAdapter(GraphemeSplitterStringAdapter); // [!code ++]
  TimeredCounterAdapter.setStringAdapter('grapheme-splitter'); // [!code ++]
</script>
```
:::

::: details File Size
<div class="text-nowrap">

| File Name                       | raw                                                                   | gzip             | brotli           | deflate          |
|---------------------------|-----------------------------------------------------------------------|------------------|------------------|------------------|
| timered-counter.esm-browser.js  | {{ filesize(esm['timered-counter.esm-browser.js'].raw) }}             | {{ filesize(esm['timered-counter.esm-browser.js'].gzip) }} | {{ filesize(esm['timered-counter.esm-browser.js'].brotli) }} | {{ filesize(esm['timered-counter.esm-browser.js'].deflate) }} |
| decimal-js-number-adapter.esm-browser.js  | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].raw) }} | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].gzip) }} | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].brotli) }} | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].deflate) }} |
| grapheme-splitter-string-adapter.esm-browser.js | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].raw) }} | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].gzip) }} | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].brotli) }} | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].deflate) }} |

</div>
:::

## Usage {#usage}

You only need to update the value, and `TimeredCounter` will handle the rest automatically.

<blockquote class="text-xs">
`TimeredCounter` is like this, you just need to update the value, but `TimeredCounter` has to consider a lot of things. XD
</blockquote>

Below is a simple example where `TimeredCounter` will automatically respond to changes in the number and handle the increment/decrement animation.

<script setup>
import GettingStartedDemo from "../../components/GettingStartedDemo.vue"; 
import DemoContainer from "../../components/DemoContainer.vue"; 
import { filesize } from "filesize";

const { umd, esm } = __TIMED_COUNTER_CDN_FILE_SIZE__;
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

## Next {#next}

- Want to see more examples of `TimeredCounter`? Check out [Examples](./examples/simple-usage).
- Want to learn about `TimeredCounter` configuration parameters? Check out [Configuration and API](../reference/api).
- Want to explore more possibilities of `TimeredCounter` styles and animations, such as achieving [this](./examples/logo) effect? You can start from [In-depth TimeredCounter](./timered-counter-in-depth).