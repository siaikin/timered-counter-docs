<script setup>
import DemoContainer from "../../../components/DemoContainer.vue";
import AdvancedDelayDemo from "../../../components/AdvancedDelayDemo.vue";
import AdvancedEasingDemo from "../../../components/AdvancedEasingDemo.vue";
</script>

# 自定义动画 {#animated-usage}

> 此章节假设你对 [CSS 动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animations) 或 [CSS 过渡](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_transitions)有一定了解。
>
> 如果你不了解 CSS 动画或 CSS 过渡，建议先学习相关内容。

## 延时 {#delay}

<DemoContainer title="延时">
<AdvancedDelayDemo />
<hr />

::: details 点击查看代码
::: code-group
<<< @/components/AdvancedDelayDemo.vue#html{html} [HTML]
<<< @/components/AdvancedDelayDemo.vue#js{js} [JS]
<<< @/components/AdvancedDelayDemo.vue{vue} [All]
:::

</DemoContainer>

## 缓动 {#easing}

为了更容易观察缓动效果，可调整动画时长并调大了字体。

<DemoContainer title="缓动">
<AdvancedEasingDemo />
<hr />

::: details 点击查看代码
::: code-group
<<< @/components/AdvancedEasingDemo.vue#html{html} [HTML]
<<< @/components/AdvancedEasingDemo.vue#js{js} [JS]
<<< @/components/AdvancedEasingDemo.vue{vue} [All]
<<< @/components/EasingView.vue{vue} [EasingView.vue]
:::

</DemoContainer>
