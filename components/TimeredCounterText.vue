<script setup>
import { useData } from "vitepress";
import {onMounted, ref} from "vue";

const { site } = useData();

const counterRef = ref();

const animationOptions = ({ preprocessData }) => {
  let count = 0;
  return preprocessData.map((part) => part.map(() => ({delay: count++ * 100,})));
};
</script>

<template>
  <timered-counter-string
    ref="counterRef"
    class="clip"
    :style="{ fontFamily: 'var(--vp-font-family-mono)' }"
    color="linear-gradient(120deg, #ed556a, #7a7374)"
    :value="site.title"
    :initial-value="site.title.replace(/./g, ' ')"
    :partsOptions.prop="{ sampleCount: 2 }"
    :animationOptions.prop="animationOptions"
  />
</template>

<style scoped></style>
