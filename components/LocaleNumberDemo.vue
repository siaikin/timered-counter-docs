<script setup>
// #region js
import {onMounted, ref, watch} from "vue";
import LocaleSelect from "./LocaleSelect.vue";
import {inBrowser} from "vitepress";

const number = ref(114514);

const locale = ref('en-US');
if (inBrowser) {
  locale.value = navigator.language;
}
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-number locale-number :locale="locale" :value="number" />
  </div>
  <hr />
  <div class="flex gap-4">
    <input class="border border-solid p-1" v-model="number" type="number" />
    <span class="flex-auto" />
    <locale-select
      class="border border-solid p-1 appearance-auto"
      v-model="locale"
    />
  </div>
  <!-- #endregion html -->
</template>

<style scoped></style>
