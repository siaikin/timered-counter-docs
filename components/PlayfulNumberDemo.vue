<script setup>
// #region js
import { onMounted, ref, watch } from "vue";
import GoogleFontPicker from "./GoogleFontPicker.vue";

const number = ref(114514);
function switchNumber() {
  number.value = Math.floor(Math.random() * 1000000);
}

const italic = ref(false);
const fontSize = ref(64);

const color = ref(
  "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
);

const fontFamily = ref("");

onMounted(() => watch([number, italic, fontSize, fontFamily, color], update, { immediate: true }));

function update() {
  const _number = number.value;
  const _italic = italic.value;
  const _fontSize = fontSize.value;
  const _fontFamily = fontFamily.value;
  const _color = color.value;

  const counter = document.getElementById('playful-number-counter');
  counter.value = _number;
  counter.color = _color;
  counter.style.fontSize = _fontSize + 'px';
  counter.style.fontStyle = _italic ? 'italic' : 'normal';
  counter.style.fontFamily = _fontFamily;
}
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-number id="playful-number-counter" style="line-height: 1.2"/>
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" type="number" />
    <button class="border border-solid px-2 py-1" @click="switchNumber">🔄</button>
    <span class="flex-auto" />
    <input class="border border-solid p-1" v-model="color" type="color" />
  </div>
  <div class="flex gap-4 mt-4">
    <label class="inline-flex gap-1 border border-solid p-1">
      斜体
      <input v-model="italic" type="checkbox" />
    </label>
    <label class="inline-flex gap-1 border border-solid p-1">
      字号
      <input v-model="fontSize" type="range" min="1" max="128" />
      {{ fontSize }}px
    </label>
  </div>
  <div class="flex gap-4 mt-4">
    <google-font-picker v-model="fontFamily" />
  </div>
  <!-- #endregion html -->
</template>

<style scoped></style>
