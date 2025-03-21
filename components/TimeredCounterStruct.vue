<script setup>
import { onMounted, ref } from "vue";
import { DurationPartType } from "timered-counter";
import { cloneNode } from "../utils/clone-node";

const from = ref("2024-12-01T00:00:00");
const to = ref("2024-12-01T09:00:01");

const containerRef = ref();
const counterRef = ref();
onMounted(() =>
  setTimeout(async () => {
    containerRef.value.replaceChild(
      (await cloneNode(counterRef.value)).node,
      counterRef.value
    );
  }, 1000)
);
</script>

<template>
  <div ref="containerRef" class="text-center py-16 overflow-hidden">
    <timered-counter-datetime-duration
      ref="counterRef"
      class="timered-counter-struct font-mono !text-6xl"
      :value="[from, to]"
      :initialValue="[from, from]"
      :precision="[DurationPartType.Hour, DurationPartType.Day]"
    />
  </div>
</template>

<style lang="scss">
@mixin component-parts__up($text, $color, $offset) {
  &::before {
    @apply content-["#{$text}"] text-xs font-bold absolute -top-#{$offset + 4} inline-block w-full text-[#{$color}];
  }
  &::after {
    @apply content-[""] text-xs absolute left-0 -top-#{$offset} inline-block w-full border-2 border-b-0 h-2 border-[#{$color}];
  }
}
@mixin component-parts__down($text, $color, $offset) {
  &::before {
    @apply content-["#{$text}"] text-xs font-bold absolute -bottom-#{$offset + 4} inline-block w-full text-[#{$color}];
  }
  &::after {
    @apply content-[""] text-xs absolute left-0 -bottom-#{$offset} inline-block w-full border-2 border-t-0 h-2 border-[#{$color}];
  }
}

@mixin component-parts__right($text, $color, $offset) {
  &::before {
    @apply content-["#{$text}"] text-xs font-bold absolute translate-x-full -right-#{$offset + 2} inline-flex items-center h-full text-[#{$color}];
  }
  &::after {
    @apply content-[""] text-xs absolute -right-#{$offset} inline-block h-full border-2 border-l-0 w-2 border-[#{$color}];
  }
}

.timered-counter-struct {
  @apply overflow-visible;

  //@include component-parts__up("group", var(--vp-c-red-3), 7);

  .roller-part {
    @apply p-1;
  }
  .roller-part:nth-child(1) {
    @apply relative bg-[var(--vp-c-indigo-soft)];

    @include component-parts__down("part", var(--vp-c-indigo-3), 3);

    .roller-part__wrapper {
      @apply relative mr-1 bg-[var(--vp-c-green-soft)];

      &:first-child {
        @include component-parts__up("digit", var(--vp-c-green-3), 4);
      }
    }

    .roller-part__suffix {
      @apply relative mr-1 bg-[var(--vp-c-yellow-soft)];

      @include component-parts__up("suffix", var(--vp-c-yellow-3), 4);
    }
  }

  .roller-part {
    .roller-part__wrapper {
      .roll-item {
        @apply mt-1;
      }
    }

    &:nth-child(2) {
      .roller-part__wrapper:nth-last-child(2) {
        .roll-item {
          @apply relative bg-[var(--vp-c-purple-soft)];

          @include component-parts__right("cell", var(--vp-c-purple-3), 2);

          &.roll-item__tail,
          &.roll-item__head {
            @apply absolute mt-0;
          }
        }
      }
    }
  }
}

.duration-unit {
  font-size: 0.4em;
  line-height: 1;
}

.timered-counter {
  overflow: visible !important;
}
</style>
