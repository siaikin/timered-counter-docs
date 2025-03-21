<script setup>
import { ref, watch } from "vue";
import { setNumberAdapter } from "timered-counter";

const number = ref(Number.MAX_SAFE_INTEGER.toString(10));

const adapters = [
  { label: "BuildInNumberAdapter", value: "number" },
  // { label: "BuildInBigintAdapter", adapter: BuildInBigintAdapter() },
  { label: "DecimalJsAdapter", value: "decimal.js" },
];
const adapterIndex = ref(0);
watch(adapterIndex, (index) => setNumberAdapter(adapters[index].value));

const realRenderNumber = ref();
watch([number, adapterIndex], () => (realRenderNumber.value = number.value), {
  immediate: true,
});
const counterRef = ref();
function handleAnimationEnd() {
  realRenderNumber.value = counterRef.value?.getAttribute("aria-label");
}

function handleInput(e) {
  number.value = e.target.value
    .split("")
    .filter((c) => (c >= "0" && c <= "9") || c === "-" || c === ".")
    .join("");
}
</script>

<template>
  <div class="text-center">
    <timered-counter-number
      ref="counterRef"
      :key="adapters[adapterIndex].value"
      :value="number"
      @timered-counter-animation-end="handleAnimationEnd"
    />
  </div>
  <div
    v-if="realRenderNumber !== number"
    class="bg-[var(--vp-c-danger-soft)] p-2 rounded mt-4"
  >
    Mismatch: should be
    <span class="text-[var(--vp-c-danger-1)]">{{ number }}</span> but rendered
    as <span class="text-[var(--vp-c-danger-1)]">{{ realRenderNumber }}</span>
  </div>
  <hr />
  <div class="flex gap-4">
    <textarea
      class="flex-auto border border-solid p-1"
      @input="handleInput"
      :value="number"
    />
    <select
      v-model="adapterIndex"
      class="self-start border border-solid p-1 appearance-auto"
    >
      <option v-for="(adapter, index) in adapters" :key="index" :value="index">
        {{ adapter.label }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
