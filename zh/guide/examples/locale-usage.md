<script setup>
import DemoContainer from "../../../components/DemoContainer.vue";
import LocaleNumberDemo from "../../../components/LocaleNumberDemo.vue";
import LocaleDatetimeDurationDemo from "../../../components/LocaleDatetimeDurationDemo.vue";
</script>

# 本地化（国际化） {#locale-usage}

TimeredCounter 对有必要的组件提供了本地化功能。

[timered-counter-number](#locale-number) 和 [timered-counter-datetime-duration](#locale-datetime-duration) 组件支持本地化，你可以通过 `locale` 属性来设置本地化的配置。

大多数情况下，你只需要将 `locale` 属性设置为 **语言代码**（如 `en`，`en-US`，`zh`，`zh-CN`）即可。
TimeredCounter 内部将调用 [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API 来处理本地化。

## 时间间隔本地化 {#locale-datetime-duration}

<DemoContainer title="时间间隔本地化">
<LocaleDatetimeDurationDemo />
<hr />

::: details 点击查看代码
::: code-group
<<< @/components/LocaleDatetimeDurationDemo.vue#html{html} [HTML]
<<< @/components/LocaleDatetimeDurationDemo.vue#js{js} [JS]
<<< @/components/LocaleDatetimeDurationDemo.vue{vue} [All]
<<< @/components/LocaleSelect.vue{vue} [LocaleSelect.vue]
:::

</DemoContainer>

## 数字本地化 {#locale-number}

特别的，`timered-counter-number` 组件还需要设置 `locale-number` 属性。

- 你可以将其设置为 `true` ，这将使用默认配置启用数字本地化。
- 也可以设置为 [Intl.NumberFormat 支持的选项](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)。

<DemoContainer title="数字本地化">
<LocaleNumberDemo />
<hr />

::: details 点击查看代码
::: code-group
<<< @/components/LocaleNumberDemo.vue#html{html} [HTML]
<<< @/components/LocaleNumberDemo.vue#js{js} [JS]
<<< @/components/LocaleNumberDemo.vue{vue} [All]
<<< @/components/LocaleSelect.vue{vue} [LocaleSelect.vue]
:::

</DemoContainer>
