<script setup>
import StackblitzLogo from "../assets/stackblitz-logo.svg";
import { ref, toRefs } from "vue";
import { getCodeStackblitzParams } from "./generate-stackblitz-params";
import sdk from "@stackblitz/sdk";
import packageInfo from "../package.json";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  onlineIde: {
    type: Boolean,
    default: true,
  }
});
const { title } = toRefs(props);

const containerRef = ref();

function handleStackblitz() {
  if (!containerRef.value) return;

  const tabs = containerRef.value.querySelectorAll(".tabs > label");
  const blocks = containerRef.value.querySelectorAll(".blocks > div code");
  if (tabs.length !== blocks.length) {
    window.alert("The number of tabs and code blocks should be the same.");
    return;
  }

  const files = Array.from(tabs).map((tab, index) => ({
    filename: tab.textContent.trim(),
    content: blocks[index].textContent,
  })).filter(({ filename}) => !['HTML', 'JS'].includes(filename));

  const params = getCodeStackblitzParams(files, {
    title: `${title.value} - timered-counter@${packageInfo.dependencies['timered-counter']}`,
  });
  sdk.openProject(params, {
    openFile: "src/demo.vue",
  });
}
</script>

<template>
  <div ref="containerRef" class="demo-container">
    <div class="flex relative">
      <span class="font-bold self-center">{{ title }}</span>
      <span class="flex-auto" />
      <span
        v-if="onlineIde"
        title="Open In Stackblitz"
        class="inline-block p-1 cursor-pointer hover:outline hover:outline-[#1389FD] outline-1"
        @click="handleStackblitz"
      >
        <img
          class="h-4 w-4 pointer-events-none"
          :src="StackblitzLogo"
          alt="CodeSandbox Logo"
        />
      </span>
    </div>
    <hr />
    <slot />
  </div>
</template>

<style lang="scss">
.demo-container {
  @apply flex flex-col justify-center border p-4 rounded-lg mt-4 text-sm;

  .vue-to-counter,
  timered-counter,
  timered-counter-number,
  timered-counter-datetime-duration,
  timered-counter-string {
    @apply font-mono text-4xl;
  }

  .custom-block {
    @apply m-0;
  }
}
</style>
