<script setup>
import {onMounted, ref} from "vue"; 
import {useData} from "vitepress"; 
import TimeredCounterText from "../../components/TimeredCounterText.vue";

const { site } = useData();
const userCount = ref(10000);
onMounted(() => setInterval(() => userCount.value += Math.floor(Math.random() * 10), 2000));

const now = ref(new Date());
onMounted(() => setInterval(() => now.value = new Date(), 2000));
const nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);
nextMonth.setDate(0);
nextMonth.setHours(0, 0, 0, 0);
</script>

# What is TimeredCounter? {#what-is-timered-counter}

TimeredCounter is a Web Components component used to display **value changes** with animation effects when the values change.

<div class="tip custom-block"><p>Just want to try it out? Jump to <a href="./getting-started.html">Getting Started</a>.</p></div>

## Usage Scenarios {#usage-scenarios}

- **Homepage Header**

  The [homepage title](/) of this documentation (<TimeredCounterText />) is an example. It can add some dynamic effects to your site, making it look more vivid.

- **Data Display**

  TimeredCounter is very suitable for displaying real-time data, statistical data, etc. For example, you can use it to display:

  - Today, <timered-counter-number class="font-mono font-bold" :value="userCount" suffix="users" :locale="site.lang" locale-number /> have visited your website. [->](./examples/simple-usage#number)
  - There are <timered-counter-datetime-duration class="font-mono font-bold" :value="[now, nextMonth]" :locale="site.lang" /> left until next month. [->](./examples/simple-usage#countdown-effect)

  ::: tip
  TimeredCounter also supports internationalization through [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). You can switch the language in the upper right corner to see the effect.
  :::

[//]: # '  * Your website has been running for <timered-counter-number class="font-mono font-bold" :value="userCount" suffix="hours" />'

## Performance

TimeredCounter uses the [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) internally to achieve animation effects, so its performance is very good.
