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

# TimeredCounter 是什么？ {#what-is-timered-counter}

TimeredCounter 是一个用于展示**数值变化**的 Web Components 组件，它可以在数值变化时增加动画效果。

<div class="tip custom-block"><p>只是想尝试一下？跳到<a href="./getting-started.html">快速开始</a>。</p></div>

## 使用场景 {#usage-scenarios}

- **站点首屏**

  本文档的[首页标题](/)（<TimeredCounterText />）就是一个例子。它可以为你的站点增加一些动态效果，使其看起来更加生动。

- **数据展示**

  TimeredCounter 很适合用来展示实时数据，统计数据等。比如，你可以使用它来展示:

  - 今天已有 <timered-counter-number class="font-mono font-bold" :value="userCount" suffix="人" :locale="site.lang" locale-number /> 访问了你的网站。 [->](./examples/simple-usage#number)
  - 距离下个月还有 <timered-counter-datetime-duration class="font-mono font-bold" :value="[now, nextMonth]" :locale="site.lang" /> [->](./examples/simple-usage#倒计时效果)

  ::: tip
  TimeredCounter 还通过 [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) 支持国际化。你可以在右上角切换语言来查看效果。
  :::

[//]: # '  * 你的网站已经运行了 <timered-counter-number class="font-mono font-bold" :value="userCount" suffix="小时" /> 了'

## 性能

TimeredCounter 在内部使用 [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) 来实现动画效果，因此它的性能表现非常好。
