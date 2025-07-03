<script setup>
// #region js
import { onMounted, ref, watch } from "vue";

const number = ref(114514);
function switchNumber() {
  number.value = Math.floor(Math.random() * 1000000);
}

const color = ref(
  "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
);
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-number class="!text-8xl font-bold" :color="color" :value="number" />
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" type="number" />
    <button class="border border-solid px-2 py-1" @click="switchNumber">🔄</button>
    <span class="flex-auto" />
    <input class="border border-solid p-1" v-model="color" type="color" />
  </div>
  <div class="flex flex-col mt-4">
    <div>你还可以将下列属性作为文本颜色：</div>
    <ol>
      <li>
        <label>
          <input
            type="radio"
            name="color"
            value="linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
            v-model="color"
          />
          CSS 渐变属性
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="color"
            value="url('https://picsum.photos/400/300')"
            v-model="color"
          />
          CSS 图片属性（加载图片时会有一段空白时间）
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            name="color"
            value="linear-gradient(rgba(255, 0, 0, 0.4), rgba(0, 0, 255, 0.4)), url('https://picsum.photos/400/300')"
            v-model="color"
          />
          CSS 渐变属性 + 图片属性
        </label>
      </li>
    </ol>
  </div>
  <!-- #endregion html -->
</template>

<style scoped></style>
