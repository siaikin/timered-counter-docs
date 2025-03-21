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

## Register/Import Components {#register-import}

### Import via Module {#import-via-module}

::: code-group
```javascript [main.js/main.ts]
import "timered-counter";
```
:::

### Import via CDN {#import-via-cdn}

Not completed


[//]: # (### Local Import {#local-import})

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

## Usage {#usage}

You only need to update the value, and `TimeredCounter` will handle the rest automatically.

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
