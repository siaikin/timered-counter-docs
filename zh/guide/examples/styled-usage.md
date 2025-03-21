<script setup>
import DemoContainer from "../../../components/DemoContainer.vue";
import ColorfulNumberDemo from "../../../components/ColorfulNumberDemo.vue";
import PlayfulNumberDemo from "../../../components/PlayfulNumberDemo.vue";
</script>

# 自定义样式 {#styled-usage}

### 自定义颜色 {#color}

> 为了更容易观察填充颜色变化，调大了字体。

<DemoContainer title="自定义颜色">
<ColorfulNumberDemo />
<hr />

::: details 点击查看代码
::: code-group
<<< @/components/ColorfulNumberDemo.vue#html{html} [HTML]
<<< @/components/ColorfulNumberDemo.vue#js{js} [JS]
<<< @/components/ColorfulNumberDemo.vue{vue} [All]
:::

</DemoContainer>

### 自定义字体 {#font}

可以直接通过设置 CSS 属性来自定义字体的各种属性。

<DemoContainer title="自定义字体">
<PlayfulNumberDemo />
<hr />

::: details 点击查看代码
::: code-group
<<< @/components/PlayfulNumberDemo.vue#html{html} [HTML]
<<< @/components/PlayfulNumberDemo.vue#js{js} [JS]
<<< @/components/PlayfulNumberDemo.vue{vue} [All]
<<< @/components/GoogleFontPicker.vue{vue} [GoogleFontPicker.vue]
:::

</DemoContainer>
