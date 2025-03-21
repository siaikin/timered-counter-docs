<script setup>
// #region js
import {onMounted, ref, watch} from "vue";

const string = ref("Hello, World!");

const strings = [
  "Hello, World!",
  "你好，世界！",
  "こんにちは、世界！",
  "안녕하세요, 세계!",
  // 太长了
  // "Bonjour, le monde!",
  "Hallo, Welt!",
  "Ciao, mondo!",
  "Olá, mundo!",
  "Привет, мир!",
  "¡Hola, mundo!",
  "Hej, världen!",
  "Merhaba, Dünya!",
  "مرحبا بالعالم!",
  "שלום, עולם!",
  "नमस्ते, दुनिया!",
  "سلام دنیا!",
];

let stringIndex = 0;
function switchString() {
  stringIndex = (stringIndex + 1) % strings.length;
  string.value = strings[stringIndex];
}

onMounted(() => watch([string], update, { immediate: true }));
function update() {
  const _string = string.value;

  const counter = document.getElementById('basic-string-counter');
  counter.value = _string;
}

// #endregion js
</script>

<template>
<!-- #region html -->
  <div class="text-center">
    <timered-counter-string id="basic-string-counter" value="Hello, World!"  />
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="string" />
    <button class="border border-solid px-2 py-1" @click="switchString">🔄</button>
  </div>
<!-- #endregion html -->
</template>

<style scoped></style>
