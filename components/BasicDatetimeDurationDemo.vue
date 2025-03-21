<script setup>
// #region js
import {onMounted, ref, watch} from "vue";
import { DurationPartType, DurationPartMillisecond } from "timered-counter";

const from = ref("2024-12-01T00:00:00");
const to = ref("2024-12-31T00:05:30");

const precision = ref([DurationPartType.Second, DurationPartType.Day]);
const durationPartTypes = ref([
  DurationPartType.Year,
  DurationPartType.Quarter,
  DurationPartType.Month,
  DurationPartType.Week,
  DurationPartType.Day,
  DurationPartType.Hour,
  DurationPartType.Minute,
  DurationPartType.Second,
]);

onMounted(() => watch([from, to, precision], update, { immediate: true }));
function update() {
  const _from = from.value;
  const _to = to.value;
  const _precision = precision.value;

  const counter = document.getElementById('basic-datetime-duration-counter');
  counter.value = [_from, _to];
  counter.precision = [..._precision];
}
// #endregion js
</script>

<template>
<!-- #region html -->
  <div class="text-center">
    <timered-counter-datetime-duration id="basic-datetime-duration-counter" />
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
  </div>
  <div class="flex gap-4 mt-4">
    <label>
      时间范围精度
      <select
        class="border border-solid p-1 appearance-auto"
        v-model="precision[0]"
      >
        <option
          v-for="partType in durationPartTypes"
          :key="partType"
          :value="partType"
        >
          {{ partType }}
        </option>
      </select>
      ~
      <select
        class="border border-solid p-1 appearance-auto"
        v-model="precision[1]"
      >
        <option
          v-for="partType in durationPartTypes.filter(
            (part) =>
              DurationPartMillisecond[part] >=
              DurationPartMillisecond[precision[0]]
          )"
          :key="partType"
          :value="partType"
        >
          {{ partType }}
        </option>
      </select>
    </label>
  </div>
<!-- #endregion html -->
</template>

<style scoped></style>
