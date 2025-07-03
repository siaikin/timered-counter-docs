<script setup>
const animationOptions = ({ preprocessData }) => {
  let count = 0;

  return preprocessData.map((part) => part.map(() => ({ delay: count++ * 1000 * 0.5, iterations: Infinity, duration: 8000 })));
};

const keyframes = {
  transform: [
    "translateY(0)",
    "translateY(100%)",
    "translateY(100%)",
  ],
  offset: [0, 0.25, 1],
};

</script>

<template>
  <div class="text-center">
    <TimeredCounterString
      class="timered-counter-logo font-bold !text-6xl border-[#7a7374] rounded border-8"
      color="#ed556a"
      value="0A文"
      style="font-family: 'PingFang SC', sans-serif"
      initial-value="012"
      :keyframes="keyframes"
      :parts-options="{ sampleCount: 2 }"
      :animation-options="animationOptions"
      :cell-styles="
        ({ data, direction }) => {
          return data.map((partData) =>
            partData.digits.map((digit) =>
              digit.data.map((char) =>
                char === '文'
                  ? {
                      fontSize: '0.8em',
                      [direction === 'up' ? 'marginTop' : 'marginBottom']:
                        '6px',
                    }
                  : { margin: '0 4px' }
              )
            )
          );
        }
      "
      :digit-styles="({ data }) => data.map((partData) =>partData.digits.map((_, index, array) => ({
      /**
      * border-width: 0px;
      *     border-right-width: 8px;
      *     border-style: solid;
      *     --tw-border-opacity: 1;
      *     border-right-color: rgb(122 115 116 / var(--tw-border-opacity, 1));
*/
      borderWidth: '0px',
      borderRightWidth: index === array.length - 1 ? '0' : '8px',
      borderStyle: 'solid',
      '--tw-border-opacity': 1,
      borderRightColor: 'rgb(122 115 116 / var(--tw-border-opacity, 1))',
      })))"
    />
<!--    <timered-counter-string-->
<!--      class="timered-counter-logo font-bold !text-6xl border-[#7a7374] rounded border-8"-->
<!--      color="#ed556a"-->
<!--      value="0A文"-->
<!--      style="font-family: 'PingFang SC', sans-serif"-->
<!--      initial-value="012"-->
<!--      :keyframes.prop="keyframes"-->
<!--      :partsOptions.prop="{ sampleCount: 2 }"-->
<!--      :animationOptions.prop="animationOptions"-->
<!--      :cellStyles.prop="-->
<!--        ({ data, direction }) => {-->
<!--          return data.map((partData) =>-->
<!--            partData.digits.map((digit) =>-->
<!--              digit.data.map((char) =>-->
<!--                char === '文'-->
<!--                  ? {-->
<!--                      fontSize: '0.8em',-->
<!--                      [direction === 'up' ? 'marginTop' : 'marginBottom']:-->
<!--                        '6px',-->
<!--                    }-->
<!--                  : { margin: '0 4px' }-->
<!--              )-->
<!--            )-->
<!--          );-->
<!--        }-->
<!--      "-->
<!--      :digitStyles.prop="({ data }) => data.map((partData) =>partData.digits.map((_, index, array) => ({-->
<!--      /**-->
<!--      * border-width: 0px;-->
<!--      *     border-right-width: 8px;-->
<!--      *     border-style: solid;-->
<!--      *     &#45;&#45;tw-border-opacity: 1;-->
<!--      *     border-right-color: rgb(122 115 116 / var(&#45;&#45;tw-border-opacity, 1));-->
<!--*/-->
<!--      borderWidth: '0px',-->
<!--      borderRightWidth: index === array.length - 1 ? '0' : '8px',-->
<!--      borderStyle: 'solid',-->
<!--      '&#45;&#45;tw-border-opacity': 1,-->
<!--      borderRightColor: 'rgb(122 115 116 / var(&#45;&#45;tw-border-opacity, 1))',-->
<!--      })))"-->
<!--    />-->
  </div>
</template>

<style lang="scss">
.timered-counter-logo {
  &::part(digit) {
    //@apply border-0 border-solid border-r-8 border-r-[#7a7374];
  }
}
</style>
