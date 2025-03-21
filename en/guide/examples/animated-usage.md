<script setup>
import DemoContainer from "../../../components/DemoContainer.vue";
import AdvancedDelayDemo from "../../../components/AdvancedDelayDemo.vue";
import AdvancedEasingDemo from "../../../components/AdvancedEasingDemo.vue";
</script>

# Custom Animation {#animated-usage}

> This section assumes you have some understanding of [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations) or [CSS transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions).
>
> If you are not familiar with CSS animations or CSS transitions, it is recommended to learn about them first.

## Delay {#delay}

<DemoContainer title="Delay">
<AdvancedDelayDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/AdvancedDelayDemo.vue#html{html} [HTML]
<<< @/components/AdvancedDelayDemo.vue#js{js} [JS]
<<< @/components/AdvancedDelayDemo.vue{vue} [All]
:::

</DemoContainer>

## Easing {#easing}

To make it easier to observe the easing effect, the animation duration has been adjusted and the font size increased.

<DemoContainer title="Easing">
<AdvancedEasingDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/AdvancedEasingDemo.vue#html{html} [HTML]
<<< @/components/AdvancedEasingDemo.vue#js{js} [JS]
<<< @/components/AdvancedEasingDemo.vue{vue} [All]
<<< @/components/EasingView.vue{vue} [EasingView.vue]
:::

</DemoContainer>