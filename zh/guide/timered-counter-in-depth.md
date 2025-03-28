<script setup>
import DemoContainer from "../../components/DemoContainer.vue"; 
import TimeredCounterStruct from "../../components/TimeredCounterStruct.vue"; 

import Part from "../../components/parts/ComponentPartPart.vue";
import Digit from "../../components/parts/ComponentPartDigit.vue";
import Cell from "../../components/parts/ComponentPartCell.vue";
import Suffix from "../../components/parts/ComponentPartSuffix.vue";

import TimeredCounterText from "../../components/TimeredCounterText.vue";

function handleHighlight(event, selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.classList.add("highlight");
  });

  event.target.addEventListener("mouseleave", () => {
    elements.forEach((element) => {
      element.classList.remove("highlight");
    });
  });
}
</script>

<style lang="scss">
.hierarchy {
  @apply flex text-sm leading-none;
}
.highlight {
  @apply text-[var(--vp-c-brand-3)] !important;
  @apply bg-[var(--vp-c-brand-soft)] !important;

  &:before,
  &:after {
    @apply text-[var(--vp-c-brand-3)] !important;
    @apply border-[var(--vp-c-brand-3)] !important;
  }
}
</style>

# 深入 TimeredCounter {#timered-counter-in-depth}

## 结构 {#structure}

TimeredCounter 由 <part @mouseenter="handleHighlight($event, '.roller-part:nth-child(1)')" />，<digit @mouseenter="handleHighlight($event, '.roller-part:nth-child(1) .roller-part__wrapper:first-child')" />，<cell @mouseenter="handleHighlight($event, '.roller-part:nth-child(2) .roller-part__wrapper:nth-last-child(2) .roll-item')" /> 和 <suffix @mouseenter="handleHighlight($event, '.roller-part:nth-child(1) .roller-part__suffix')" /> 组成。你可以在下方的示例的标注中看到这些部分。

其中 <suffix @mouseenter="handleHighlight($event, '.roller-part:nth-child(1) .roller-part\_\_unit')" /> 是一个可选的部分。在下方示例中，它被用于显示时间（day，hour）单位。

<DemoContainer title="TimeredCounter 结构" :online-ide="false"><TimeredCounterStruct /></DemoContainer>

### 层级关系 {#hierarchy}

以上方示例作为参考，TimeredCounter 的层级关系如下：

```
part -> digit -> cell
     -> digit -> cell
     -> suffix (day)

part -> digit -> cell
     -> digit -> cell
     -> suffix (hour)
```

## 用途 {#usage}

> 简单使用时（如[简单的滚动效果](./examples/simple-usage)， [本地化](./examples/locale-usage)），大可不必关心 TimeredCounter 的实现细节。
>
> 但是，当我们需要自定义动画效果，例如（<TimeredCounterText />），或者需要自定义每个数位的样式时，了解 TimeredCounter 的结构是必不可少的。

为了提供足够的自由度来自定义动画效果和样式。你可以使用

1. `animationOptions` 设置精确到 <digit /> 的动画属性。
2. `cellStyle` 设置精确到 <cell /> 的样式属性。

### 设置动画属性 {#set-animation-options}

`animationOptions` 是 [`Element.animate(keyframes, options)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate#options) 的第二个参数，你可以在这里设置动画的属性，比如 `duration`，`delay`，`easing` 等。

配置的形式可以有如下几种：

- 一个对象，包含你设置的配置项，将应用到所有 <digit />。
  ```js
  { duration: 0.5, delay: 0.1 }
  ```
- 一个一维数组，将应用到对应 <part /> 中的所有 <digit />。
  ```js
  [
    { duration: 0.5, delay: 0.1 }, // part 1
    { duration: 0.5, delay: 0.4 }, // part 2
    ...
  ]
  ```
- 一个二维数组，将应用到对应 <part /> 中的对应 <digit />。
  ```js
  [
    [ // part 1
      { duration: 0.5, delay: 0.1 }, // digit 1
      { duration: 0.5, delay: 0.4 }, // digit 2
      ...
    ],
    ...
  ]
  ```
- 一个回调函数，接受一个对象，其中包含：

  - `preprocessData`：一个二维数组，包含了每个 <digit /> 的测试结果。
  - `data`：用于滚动的数据。包含了构造每个 <digit /> 滚动列表的数据。
  - `direction`：滚动的方向。`up` 或 `down`。
  - `value`：数值的新值和旧值。

  函数的返回值可以是上述三种形式之一。

比如，在[延时示例](./examples/animated-usage#delay)中，在启用**延迟递增**后，对每个 <digit /> 的动画延时进行了设置，以实现递增的延时效果。

<<< @/components/AdvancedDelayDemo.vue#increaseDelay{16-18 js}

### 自定义样式 {#custom-style}

`cellStyle` 是个 `CSSProperties` ，你可以在这里设置 <cell /> 的样式。

配置的形式在 `animationOptions` 的基础上增加了一层：

- 一个三维数组，将应用到对应 <part /> 中的对应 <digit /> 中的对应 <cell />。
  ```js
  [
    [
      // part 1
      [
        // digit 1
        { color: "red" }, // cell 1
        { color: "blue" }, // cell 2
      ],
    ],
  ];
  ```
- 回调函数的形式与 `animationOptions` 相同。也可以返回三维数组。
