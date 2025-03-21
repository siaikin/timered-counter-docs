<script setup>
// #region js
import {onMounted, ref, watch} from "vue";

const number = ref(114514);
function switchNumber() {
  number.value = Math.floor(Math.random() * 1000000);
}

onMounted(() => watch([number], update, { immediate: true }));
function update() {
  const _number = number.value;

  const counter = document.getElementById('basic-number-counter');
  counter.value = _number;
}
// #endregion js
</script>

<template>
<!-- #region html -->
  <div class="text-center">
    <timered-counter-number id="basic-number-counter" initial-value="114511" />
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" />
    <button class="border border-solid px-2 py-1" @click="switchNumber">🔄</button>
  </div>
<!-- #endregion html -->
</template>

<style scoped></style>
