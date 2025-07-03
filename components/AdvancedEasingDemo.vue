<script setup>
// #region js
import {onMounted, ref, watch} from "vue";
import EasingView from "./EasingView.vue";

const number = ref(1);
const fontSize = ref(64);

function switchNumber() {
  number.value = Math.floor(Math.random() * 100);
}

const animationOptions = ref({
  easing: "ease",
  duration: 2000,
});
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-number
      class="font-bold"
      :style="{
      lineHeight: '1.2',
      fontSize: `${fontSize}px`,
    }"
      :value="number"
      :animation-options="animationOptions"
    />
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" type="number" />
    <button class="border border-solid px-2 py-1" @click="switchNumber">🔄</button>
  </div>
  <div class="flex gap-4 mt-4">
    <label class="inline-flex gap-1 border border-solid p-1">
      字号
      <input v-model="fontSize" type="range" min="1" max="128" />
      {{ fontSize }}px
    </label>
    <label class="inline-flex gap-1 border border-solid p-1">
      持续时间（s）：
      <input
        v-model="animationOptions.duration"
        type="range"
        min="0"
        max="6000"
        step="500"
      />
      {{ animationOptions.duration }}
    </label>
  </div>
  <div class="flex gap-4 mt-4">
    <div class="flex-none w-64 flex flex-col">
      <select
        v-model="animationOptions.easing"
        @update:model-value="switchNumber"
        class="w-full border border-solid p-1 self-start appearance-auto"
      >
        <optgroup label="Build-in Easings">
          <option value="linear">linear</option>
          <option value="ease">ease</option>
          <option value="ease-in">ease-in</option>
          <option value="ease-out">ease-out</option>
          <option value="ease-in-out">ease-in-out</option>
          <option value="cubic-bezier(0.3, 0.2, 0.2, 1.4)">
            cubic-bezier(0.3, 0.2, 0.2, 1.4)
          </option>
          <option value="steps(4, end)">steps(4, end)</option>
        </optgroup>
        <optgroup label="easings.net Easing">
          <option value="easeInQuad">easeInQuad</option>
          <option value="easeOutQuad">easeOutQuad</option>
          <option value="easeInOutQuad">easeInOutQuad</option>
          <option value="easeInCubic">easeInCubic</option>
          <option value="easeOutCubic">easeOutCubic</option>
          <option value="easeInOutCubic">easeInOutCubic</option>
          <option value="easeInQuart">easeInQuart</option>
          <option value="easeOutQuart">easeOutQuart</option>
          <option value="easeInOutQuart">easeInOutQuart</option>
          <option value="easeInQuint">easeInQuint</option>
          <option value="easeOutQuint">easeOutQuint</option>
          <option value="easeInOutQuint">easeInOutQuint</option>
          <option value="easeInSine">easeInSine</option>
          <option value="easeOutSine">easeOutSine</option>
          <option value="easeInOutSine">easeInOutSine</option>
          <option value="easeInExpo">easeInExpo</option>
          <option value="easeOutExpo">easeOutExpo</option>
          <option value="easeInOutExpo">easeInOutExpo</option>
          <option value="easeInCirc">easeInCirc</option>
          <option value="easeOutCirc">easeOutCirc</option>
          <option value="easeInOutCirc">easeInOutCirc</option>
          <option value="easeInBack">easeInBack</option>
          <option value="easeOutBack">easeOutBack</option>
          <option value="easeInOutBack">easeInOutBack</option>
          <option value="easeInElastic">easeInElastic</option>
          <option value="easeOutElastic">easeOutElastic</option>
          <option value="easeInOutElastic">easeInOutElastic</option>
          <option value="easeInBounce">easeInBounce</option>
          <option value="easeOutBounce">easeOutBounce</option>
          <option value="easeInOutBounce">easeInOutBounce</option>
        </optgroup>
      </select>
      <span class="text-xs">
        Easing functions provided by
        <a
          href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function"
          target="_blank"
        >
          MDN
        </a>
        and
        <a href="https://easings.net" target="_blank"> easings.net </a>
        .
      </span>
    </div>
    <easing-view :easing="animationOptions.easing" />
  </div>
  <!-- #endregion html -->
</template>

<style scoped></style>
