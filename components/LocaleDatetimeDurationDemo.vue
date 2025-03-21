<script setup>
// #region js
import {onMounted, ref, watch} from "vue";
import LocaleSelect from "./LocaleSelect.vue";

const from = ref("2024-12-01T00:00:00");
const to = ref("2024-12-31T00:00:00");

const locale = ref(navigator.language);

onMounted(() => watch([from, to, locale], update, { immediate: true }));
function update() {
  const _from = from.value;
  const _to = to.value;
  const _locale = locale.value;

  const counter = document.getElementById('locale-datetime-duration-counter');
  counter.value = [_from, _to];
  counter.locale = _locale;
}
// #endregion js
</script>

<template>
  <!-- #region html -->
  <div class="text-center">
    <timered-counter-datetime-duration id="locale-datetime-duration-counter"/>
  </div>
  <hr />
  <div class="flex gap-4">
    <div>
      <input
        class="border border-solid p-1"
        v-model="from"
        type="datetime-local"
      />
      ~
      <input
        class="border border-solid p-1"
        v-model="to"
        type="datetime-local"
      />
    </div>
    <span class="flex-auto" />
    <locale-select
      class="border border-solid p-1 appearance-auto"
      v-model="locale"
    />
  </div>
  <!-- #endregion html -->
</template>

<style scoped></style>
