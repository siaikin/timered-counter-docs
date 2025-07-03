import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Timered Counter",
  description: "A counter component with smooth animations.",
  lang: "en-US",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Guide", link: "/en/guide/what-is-timered-counter" },
      { text: "Reference", link: "/en/reference/api" },
    ],

    sidebar: {
      "/en/guide/": {
        base: "/en/guide/",
        items: [
          {
            collapsed: false,
            text: "Introduction",
            items: [
              {
                text: "What is TimeredCounter?",
                link: "what-is-timered-counter",
              },
              { text: "Getting Started", link: "getting-started" },
            ],
          },
          {
            collapsed: false,
            text: "Framework Integration",
            items: [
              {
                text: "Vue",
                link: "integration/vue",
              },
            ],
          },
          {
            collapsed: false,
            text: "Examples",
            items: [
              {
                text: "Simple Scrolling Effects",
                link: "examples/simple-usage",
              },
              { text: "Localization", link: "examples/locale-usage" },
              { text: "Custom Styles", link: "examples/styled-usage" },
              { text: "Custom Animation", link: "examples/animated-usage" },
              {
                collapsed: true,
                text: "More Examples",
                items: [
                  {
                    text: "Hearthstone Queue Interface",
                    link: "examples/hearthstone-queue",
                  },
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
            text: "Advanced",
            items: [
              {
                text: "Limitations and How to Solve Them",
                link: "optional-dependencies",
              },
              {
                text: "In-Depth TimeredCounter",
                link: "timered-counter-in-depth",
              },
            ],
          },
        ],
      },
      "/en/reference/": {
        base: "/en/reference/",
        items: [
          {
            collapsed: false,
            text: "Component API",
            link: "api",
          },
        ],
      },
    },

    editLink: {
      pattern:
        "https://github.com/siaikin/timered-counter-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
});
