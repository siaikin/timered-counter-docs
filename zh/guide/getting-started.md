# 快速开始 {#getting-started}

## 安装 {#installation}

### 前置准备 {#prerequisites}

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

::: tip 注意
TimeredCounter 目前有两个可选的依赖项，考虑到它们的体积较大，所以默认情况下不会被安装。你可以根据需要手动安装它们。

- **decimal.js**: Decimal.js 提供了近乎无限制的精度，用于处理大数/高精度浮点数计算。[什么时候需要使用它](optional-dependencies#character-length-limit)

  ![npm bundle size](https://img.shields.io/bundlephobia/min/decimal.js?style=flat-square)

- **grapheme-splitter**: grapheme-splitter 可以正确地分割包含 emoji 的字符串。[什么时候需要使用它](optional-dependencies.md#support-emoji-segmentation)

  ![npm bundle size](https://img.shields.io/bundlephobia/min/grapheme-splitter?style=flat-square)
  :::

## 注册/引入组件 {#register-import}

### 通过模块引入 {#import-via-module}

::: code-group
```javascript [main.js/main.ts]
import "timered-counter";
```
:::

### 通过 CDN 引入 {#import-via-cdn}

未完成


[//]: # (### 局部引入 {#local-import})

[//]: # ()
[//]: # (```vue)

[//]: # (<script setup>)

[//]: # (import { TimeredCounter } from "timered-counter";)

[//]: # (</script>)

[//]: # ()
[//]: # (<template>)

[//]: # (  <TimeredCounter />)

[//]: # (</template>)

[//]: # (```)

## 用法 {#usage}

你只需要更新数值，`TimeredCounter` 会自动处理剩下的事情。

<blockquote class="text-xs">
`TimeredCounter` 是这样的，你只要更新数值就可以，可 `TimeredCounter` 要考虑的事情就很多了。XD
</blockquote>

下方这是一个简单的示例，`TimeredCounter` 会自动响应数字的变化，并且会自动处理数字的增减动画。

<script setup>
import GettingStartedDemo from "../../components/GettingStartedDemo.vue"; 
import DemoContainer from "../../components/DemoContainer.vue"; 

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
