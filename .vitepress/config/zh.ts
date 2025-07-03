import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Timered Counter",
  description: "拥有流畅动画的计数器 Web Component 组件。",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guide/what-is-timered-counter" },
      { text: "参考", link: "/reference/api" },
    ],

    sidebar: {
      "/guide/": {
        base: "/guide/",
        items: [
          {
            collapsed: false,
            text: "简介",
            items: [
              {
                text: "TimeredCounter 是什么？",
                link: "what-is-timered-counter",
              },
              { text: "快速开始", link: "getting-started" },
            ],
          },
          {
            collapsed: false,
            text: "框架集成",
            items: [
              {
                text: "Vue",
                link: "integration/vue",
              },
            ],
          },
          {
            collapsed: false,
            text: "示例",
            items: [
              { text: "简单的滚动效果", link: "examples/simple-usage" },
              { text: "本地化", link: "examples/locale-usage" },
              { text: "自定义样式", link: "examples/styled-usage" },
              { text: "自定义动画", link: "examples/animated-usage" },
              {
                collapsed: true,
                text: "更多示例",
                items: [
                  {
                    text: "TimeredCounter Logo",
                    link: "examples/logo",
                  },
                ],
              },
            ],
          },
          {
            collapsed: false,
            text: "进阶",
            items: [
              { text: "限制及如何解决", link: "optional-dependencies" },
              { text: "深入 TimeredCounter", link: "timered-counter-in-depth" },
            ],
          },
        ],
      },
      "/reference/": {
        base: "/reference/",
        items: [
          {
            collapsed: false,
            text: "组件 API",
            link: "api",
          },
        ],
      },
    },

    editLink: {
      pattern:
        "https://github.com/siaikin/timered-counter-docs/edit/main/:path",
      text: "在 GitHub 上编辑此页",
    },
  },
});
