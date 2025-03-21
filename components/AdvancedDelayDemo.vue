<script setup>
// #region js
import {onMounted, ref, watch} from "vue";

const number = ref(114514);

function switchNumber() {
  number.value = Math.floor(Math.random() * 1000000);
}

// #region increaseDelay
const delay = ref(100);
const increase = ref(false);

onMounted(() => watch([number, delay, increase,], update, { immediate: true }));
function update() {
  const _number = number.value;
  const _delay = delay.value;
  const _increase = increase.value;

  const counter = document.getElementById('advanced-delay-counter');
  counter.value = _number;
  counter.animationOptions = ({ preprocessData }) => {
    if (!_increase) return { delay: _delay };

    let count = 0;
    return preprocessData.map((part) =>
      part.map(() => ({ delay: count++ * _delay }))
    );
  };
}
// #endregion increaseDelay
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-number id="advanced-delay-counter"/>
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" type="number" />
    <button class="border border-solid px-2 py-1" @click="switchNumber">🔄</button>
  </div>
  <div class="flex gap-4 mt-4 items-center">
    <label class="inline-flex gap-1 border border-solid p-1">
      延时（ms）：
      <input v-model="delay" type="range" min="0" max="3000" step="100" />
      {{ delay }}
    </label>
    <label class="inline-flex gap-1 border border-solid p-1">
      延迟递增：
      <input type="checkbox" v-model="increase" />
    </label>
  </div>
  <!-- #endregion html -->
</template>

<style scoped></style>
