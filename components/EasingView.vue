<script setup>
import { computed, toRefs } from "vue";
import {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
  cubicBezier,
} from "timered-counter";

function steps(stepCount, stepPosition = "end") {
  if (stepCount < 1 || (stepPosition === "jump-none" && stepCount < 2)) {
    throw new Error("Invalid step count or step position");
  }

  return function (inputProgress, before = false) {
    if (before) return 0;

    let stepValue;
    switch (stepPosition) {
      case "jump-start":
      case "start":
        stepValue = Math.ceil(inputProgress * stepCount) / stepCount;
        break;
      case "jump-end":
      case "end":
        stepValue = Math.floor(inputProgress * stepCount) / stepCount;
        break;
      case "jump-none":
        stepValue =
          Math.floor(inputProgress * (stepCount - 1)) / (stepCount - 1);
        break;
      case "jump-both":
        stepValue =
          Math.ceil(inputProgress * (stepCount + 1)) / (stepCount + 1);
        break;
      default:
        throw new Error("Invalid step position");
    }

    return Math.min(Math.max(stepValue, 0), 1);
  };
}
const BuildInEasingFunction = {
  linear,
  ease: cubicBezier(0.25, 0.1, 0.25, 1),
  ["ease-in"]: cubicBezier(0.42, 0, 1, 1),
  ["ease-out"]: cubicBezier(0, 0, 0.58, 1),
  ["ease-in-out"]: cubicBezier(0.42, 0, 0.58, 1),
  steps,

  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
};

const props = defineProps({
  easing: String,
});
const { easing } = toRefs(props);

const easingFunction = computed(() => {
  const easingName = easing.value;
  let result = BuildInEasingFunction[easingName];

  if (easingName.startsWith("cubic-bezier")) {
    const cubicBezierValues = easingName
      .replace("cubic-bezier(", "")
      .replace(")", "")
      .split(",")
      .map((value) => parseFloat(value));
    result = cubicBezier(...cubicBezierValues);
  } else if (easingName.startsWith("steps")) {
    const stepsValues = easingName
      .replace("steps(", "")
      .replace(")", "")
      .split(",")
      .map((value) => value.trim());
    result = steps(Number.parseInt(stepsValues[0], 10), stepsValues[1]);
  }

  return result;
});

const pathData = computed(() => {
  const easingFunctionValue = easingFunction.value;

  const points = Array.from({ length: 101 }, (_, i) => i / 100);
  return points
    .map((t, i) => {
      const x = t * 160;
      const y = 120 - easingFunctionValue(t) * 120;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");
});
</script>

<template>
  <svg
    class="overflow-visible mt-2 w-32 border p-1"
    width="160"
    height="120"
    viewBox="0 0 160 120"
  >
    <defs>
      <linearGradient id="out" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ed556a"></stop>
        <stop offset="30%" stop-color="#ed556a"></stop>
        <stop offset="50%" stop-color="#7a7374"></stop>
        <stop offset="100%" stop-color="#7a7374"></stop>
      </linearGradient>
    </defs>
    <path :d="pathData" stroke="url(#out)" fill="none" stroke-width="3px" />
  </svg>
</template>

<style scoped></style>
