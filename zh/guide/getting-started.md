# 快速开始 {#getting-started}

::: tip 注意
TimeredCounter 目前有两个可选的依赖项，考虑到它们的体积较大，所以默认情况下不会被安装。你可以根据需要手动安装它们。

- **decimal.js**: Decimal.js 提供了近乎无限制的精度，用于处理大数/高精度浮点数计算。[如何使用 ->](optional-dependencies#character-length-limit)
- **grapheme-splitter**: grapheme-splitter 可以正确地分割包含 emoji 的字符串。[如何使用 ->](optional-dependencies.md#support-emoji-segmentation)

**在下方的每种使用方式中，我们都会提供如何安装这两个依赖的方法。**
:::

## 通过 CDN 引入 {#import-via-cdn}

你可以借助 `<script>` 标签直接通过 CDN 使用 TimeredCounter：

```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.global.js"></script>
```

这里我们使用了 [jsdelivr](https://jsdelivr.com)，但你也可以使用任何提供 npm 包服务的 CDN，例如 [unpkg](https://unpkg.com/timered-counter) 或 [cdnjs](https://cdnjs.com/libraries/timered-counter)。当然，你也可以下载此文件并自行提供服务。

通过 CDN 使用 TimeredCounter 时，不涉及“构建步骤”。这使得设置更加简单，并且可以用于增强静态的 HTML。

### 使用全局构建版本 {#global-build}
上面的链接使用了全局构建版本的 TimeredCounter，该版本的所有顶层 API 都以属性的形式暴露在了全局的 TimeredCounter 对象上。这里有一个使用全局构建版本的例子：

```html
...
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.global.js"></script>

<div style="font-size: 36px; text-align: center;">
  <timered-counter-string value="123456789" initial-value="0"></timered-counter-string>
</div>
```

#### 可选依赖
::: details 添加 `decimal.js` 数字适配器
如果你需要使用基于 `decimal.js` 的数字适配器，请先添加下列 `<script>` 标签：
```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/decimal-js-number-adapter.global.js"></script>
```
然后在你的代码中引入：
```javascript
TimeredCounter.TimeredCounterAdapter.registryAdapter(TimeredCounterExternal.DecimalJsNumberAdapter); // 注册适配器
TimeredCounter.TimeredCounterAdapter.setNumberAdapter('decimal.js'); // 设置使用的适配器
```
:::

::: details 添加 `grapheme-splitter` 字符串适配器
如果你需要使用基于 `grapheme-splitter` 的字符串适配器，请先安装它：
```html
<script src="https://cdn.jsdelivr.net/npm/timered-counter/dist/grapheme-splitter-string-adapter.global.js"></script>
```
然后在你的代码中引入：
```javascript
TimeredCounter.TimeredCounterAdapter.registryAdapter(TimeredCounterExternal.GraphemeSplitterAdapter); // 注册适配器
TimeredCounter.TimeredCounterAdapter.setNumberAdapter('grapheme-splitter'); // 设置使用的适配器
```
:::

::: details 文件体积
<div class="text-nowrap">

| 文件名                       | raw                                                  | gzip             | brotli           | deflate          |
|---------------------------|------------------------------------------------------|------------------|------------------|------------------|
| timered-counter.global.js  | {{ filesize(umd['timered-counter.global.js'].raw) }} | {{ filesize(umd['timered-counter.global.js'].gzip) }} | {{ filesize(umd['timered-counter.global.js'].brotli) }} | {{ filesize(umd['timered-counter.global.js'].deflate) }} |
| decimal-js-number-adapter.global.js  | {{ filesize(umd['decimal-js-number-adapter.global.js'].raw) }} | {{ filesize(umd['decimal-js-number-adapter.global.js'].gzip) }} | {{ filesize(umd['decimal-js-number-adapter.global.js'].brotli) }} | {{ filesize(umd['decimal-js-number-adapter.global.js'].deflate) }} |
| grapheme-splitter-string-adapter.global.js | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].raw) }} | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].gzip) }} | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].brotli) }} | {{ filesize(umd['grapheme-splitter-string-adapter.global.js'].deflate) }} |

</div>
:::

### 使用 ES 模块构建版本 {#es-module-build}
在本文档的其余部分我们使用的主要是 ES 模块语法。现代浏览器大多都已原生支持 ES 模块。因此我们可以像这样通过 CDN 以及原生 ES 模块使用 TimeredCounter：

```html
...
<script type="module" src="https://cdn.jsdelivr.net/npm/timered-counter/dist/timered-counter.esm-browser.js"></script>

<div id="demo" style="font-size: 36px; text-align: center;">
  <timered-counter-string value="123456789" initial-value="0"></timered-counter-string>
</div>
```
注意我们使用了 `<script type="module">`，且导入的 CDN URL 指向的是 TimeredCounter 的 ES 模块构建版本。


#### 可选依赖
::: details 添加 `decimal.js` 数字适配器
如果你需要使用基于 `decimal.js` 的数字适配器，请根据下列代码进行修改：
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

::: details 添加 `grapheme-splitter` 字符串适配器
如果你需要使用基于 `grapheme-splitter` 的字符串适配器，请根据下列代码进行修改：
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

::: details 文件体积
<div class="text-nowrap">

| 文件名                       | raw                                                                   | gzip             | brotli           | deflate          |
|---------------------------|-----------------------------------------------------------------------|------------------|------------------|------------------|
| timered-counter.esm-browser.js  | {{ filesize(esm['timered-counter.esm-browser.js'].raw) }}             | {{ filesize(esm['timered-counter.esm-browser.js'].gzip) }} | {{ filesize(esm['timered-counter.esm-browser.js'].brotli) }} | {{ filesize(esm['timered-counter.esm-browser.js'].deflate) }} |
| decimal-js-number-adapter.esm-browser.js  | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].raw) }} | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].gzip) }} | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].brotli) }} | {{ filesize(esm['decimal-js-number-adapter.esm-browser.js'].deflate) }} |
| grapheme-splitter-string-adapter.esm-browser.js | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].raw) }} | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].gzip) }} | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].brotli) }} | {{ filesize(esm['grapheme-splitter-string-adapter.esm-browser.js'].deflate) }} |

</div>
:::

## 通过模块引入 {#import-via-module}

### 安装 {#installation}
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

### 引入 {#import}

```javascript
import "timered-counter";
```

#### 可选依赖
::: details 安装 `decimal.js` 数字适配器
如果你需要使用基于 `decimal.js` 的数字适配器，请先安装它：
```shell
npm install decimal.js --save
```
然后在你的代码中引入：
```javascript
import DecimalJsAdapter from "timered-counter/dist/src/number-adapter/decimal.js";
import { TimeredCounterAdapter } from "timered-counter";

TimeredCounterAdapter.registryAdapter(DecimalJsAdapter); // 注册适配器
TimeredCounterAdapter.setNumberAdapter('decimal.js'); // 设置使用的适配器
```
:::

::: details 安装 `grapheme-splitter` 字符串适配器
如果你需要使用基于 `grapheme-splitter` 的字符串适配器，请先安装它：
```shell
npm install grapheme-splitter --save
```
然后在你的代码中引入：
```javascript
import GraphemeSplitterAdapter from "timered-counter/dist/src/string-adapter/grapheme-splitter.js";
import { TimeredCounterAdapter } from "timered-counter";

TimeredCounterAdapter.registryAdapter(GraphemeSplitterAdapter); // 注册适配器
TimeredCounterAdapter.setStringAdapter('grapheme-splitter'); // 设置使用的适配器
```
:::


## 用法 {#usage}

你只需要更新数值，`TimeredCounter` 会自动处理剩下的事情。

<blockquote class="text-xs">
`TimeredCounter` 是这样的，你只要更新数值就可以，可 `TimeredCounter` 要考虑的事情就很多了。XD
</blockquote>

下方这是一个简单的示例，`TimeredCounter` 会自动响应数字的变化，并且会自动处理数字的增减动画。

<script setup>
import GettingStartedDemo from "../../components/GettingStartedDemo.vue"; 
import DemoContainer from "../../components/DemoContainer.vue"; 
import { filesize } from "filesize";

const { umd, esm } = __TIMED_COUNTER_CDN_FILE_SIZE__;
</script>

<DemoContainer title="快速开始">
<GettingStartedDemo />
<hr />

::: code-group
<<< @/components/GettingStartedDemo.vue#html{html} [HTML]
<<< @/components/GettingStartedDemo.vue#js{js} [JS]
<<< @/components/GettingStartedDemo.vue{vue} [All]
:::
</DemoContainer>

## 下一步 {#next}

- 想查看更多 `TimeredCounter` 的示例？请查看 [示例](./examples/simple-usage)。
- 要了解 `TimeredCounter` 的配置参数？请查看 [配置和API](../reference/api)。
- 要探索 `TimeredCounter` 样式和动画更多的可能性，例如实现[这样](./examples/logo)的效果？你可以从 [深入 TimeredCounter](./timered-counter-in-depth) 开始。
