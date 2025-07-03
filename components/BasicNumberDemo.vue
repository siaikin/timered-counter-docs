<script setup>
// #region js
import {ref} from "vue";

const number = ref(114514);
function switchNumber() {
  number.value = Math.floor(Math.random() * 1000000);
}
// #endregion js
</script>

<template>
<!-- #region html -->
  <div class="text-center">
    <timered-counter-number initial-value="114511" :value="number" />
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" />
    <button class="border border-solid px-2 py-1" @click="switchNumber">🔄</button>
  </div>
<!-- #endregion html -->
</template>

<style scoped></style>
