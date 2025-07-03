<script setup lang="ts">
// #region js
import { ref } from "vue";
let userCount = ref(1000);
setInterval(() => {
  userCount.value += Math.floor(Math.random() * 10);
}, 1100);
// #endregion js
</script>

<template>
<!-- #region html -->
  <timered-counter-number
    class="font-mono font-bold self-center"
    :value="userCount"
  />
<!-- #endregion html -->
</template>

<style scoped></style>
