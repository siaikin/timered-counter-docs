<script setup>
import { onMounted, ref, watch } from "vue";
import { setStringAdapter, registerAdapter } from "timered-counter";
import DecimalJsNumberAdapter from "timered-counter/number-adapter/decimal-js";

registerAdapter(DecimalJsNumberAdapter); // [!code ++]

const string = ref("emoji 🎉 🧑‍💻");

const adapters = [
  { label: "BuildInStringAdapter", value: "string" },
  {
    label: "BuildInIntlSegmenterAdapter",
    value: "intl-segmenter",
  },
  { label: "GraphemeSplitterAdapter", value: "grapheme-splitter" },
];
const adapterIndex = ref(0);
watch(adapterIndex, (index) => setStringAdapter(adapters[index].value));

const realRenderString = ref();
watch([string, adapterIndex], () => (realRenderString.value = string.value), {
  immediate: true,
});
const counterRef = ref();
function handleAnimationEnd() {
  realRenderString.value = counterRef.value?.getAttribute("aria-label");
}
onMounted(() => setTimeout(() => handleAnimationEnd(), 1000));
</script>

<template>
  <div class="text-center">
    <timered-counter-string
      ref="counterRef"
      :value="string"
      :key="adapters[adapterIndex].value"
      @timered-counter-animation-end="handleAnimationEnd"
    />
  </div>
  <div
    v-if="realRenderString !== string"
    class="bg-[var(--vp-c-danger-soft)] p-2 rounded mt-4"
  >
    Mismatch: should be
    <span class="text-[var(--vp-c-danger-1)]">{{ string }}</span> but rendered
    as <span class="text-[var(--vp-c-danger-1)]">{{ realRenderString }}</span>
  </div>
  <hr />
  <div class="flex gap-4">
    <textarea class="flex-auto border border-solid p-1" v-model="string" />
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
