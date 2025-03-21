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

onMounted(() => watch([number, locale], update, { immediate: true }));
function update() {
  const _number = number.value;
  const _locale = locale.value;

  const counter = document.getElementById('locale-number-counter');
  counter.value = _number;
  counter.locale = _locale;
}
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-number id="locale-number-counter" locale-number />
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
