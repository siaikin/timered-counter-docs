<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
// #region js
  let userCount = 1000;
  const counter = document.getElementById('counter');
  setInterval(() => {
    userCount += Math.floor(Math.random() * 10);
    counter.value = userCount;
  }, 1100);
// #endregion js
});
</script>

<template>
<!-- #region html -->
  <timered-counter-number
    id="counter"
    class="font-mono font-bold self-center"
  />
<!-- #endregion html -->
</template>

<style scoped></style>
