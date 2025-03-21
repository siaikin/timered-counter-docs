<script setup>
import DemoContainer from "../../../components/DemoContainer.vue";
import LocaleNumberDemo from "../../../components/LocaleNumberDemo.vue";
import LocaleDatetimeDurationDemo from "../../../components/LocaleDatetimeDurationDemo.vue";
</script>

# Localization (Internationalization) {#locale-usage}

TimeredCounter provides localization features for necessary components.

The [timered-counter-number](#locale-number) and [timered-counter-datetime-duration](#locale-datetime-duration) components support localization, and you can set the localization configuration through the `locale` attribute.

In most cases, you only need to set the `locale` attribute to a **language code** (such as `en`, `en-US`, `zh`, `zh-CN`).
TimeredCounter will internally call the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API to handle localization.

## Datetime Duration Localization {#locale-datetime-duration}

<DemoContainer title="Datetime Duration Localization">
<LocaleDatetimeDurationDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/LocaleDatetimeDurationDemo.vue#html{html} [HTML]
<<< @/components/LocaleDatetimeDurationDemo.vue#js{js} [JS]
<<< @/components/LocaleDatetimeDurationDemo.vue{vue} [All]
<<< @/components/LocaleSelect.vue{vue} [LocaleSelect.vue]
:::

</DemoContainer>

## Number Localization {#locale-number}

Specifically, the `timered-counter-number` component also needs to set the `locale-number` attribute.

- You can set it to `true`, which will enable number localization with the default configuration.
- You can also set it to options supported by [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options).

<DemoContainer title="Number Localization">
<LocaleNumberDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/LocaleNumberDemo.vue#html{html} [HTML]
<<< @/components/LocaleNumberDemo.vue#js{js} [JS]
<<< @/components/LocaleNumberDemo.vue{vue} [All]
<<< @/components/LocaleSelect.vue{vue} [LocaleSelect.vue]
:::

</DemoContainer>