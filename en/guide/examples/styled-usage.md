<script setup>
import DemoContainer from "../../../components/DemoContainer.vue";
import ColorfulNumberDemo from "../../../components/ColorfulNumberDemo.vue";
import PlayfulNumberDemo from "../../../components/PlayfulNumberDemo.vue";
</script>

# Custom Styles {#styled-usage}

### Custom Colors {#color}

> To better observe the changes in fill color, the font size has been increased.

<DemoContainer title="Custom Colors">
<ColorfulNumberDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/ColorfulNumberDemo.vue#html{html} [HTML]
<<< @/components/ColorfulNumberDemo.vue#js{js} [JS]
<<< @/components/ColorfulNumberDemo.vue{vue} [All]
:::

</DemoContainer>

### Custom Fonts {#font}

You can directly customize various font properties by setting CSS properties.

<DemoContainer title="Custom Fonts">
<PlayfulNumberDemo />
<hr />

::: details Click to view code
::: code-group
<<< @/components/PlayfulNumberDemo.vue#html{html} [HTML]
<<< @/components/PlayfulNumberDemo.vue#js{js} [JS]
<<< @/components/PlayfulNumberDemo.vue{vue} [All]
<<< @/components/GoogleFontPicker.vue{vue} [GoogleFontPicker.vue]
:::

</DemoContainer>