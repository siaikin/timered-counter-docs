import { defineConfig } from "vitepress";
import { fileURLToPath } from "node:url";
import Footnote from "markdown-it-footnote";
import zh from "./zh";
import en from "./en";
import {timeredCounterCdnFileSize} from "./timered-counter-cdn-file-size.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Timered Counter",
  head: [
    [
      "script",
      {
        defer: "true",
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "91020e69-95c4-4a5c-9d8a-270ac84cb649"
      }
    ],
    ["link", { rel: "icon", href: "/favicon.svg" }]
  ],

  rewrites: {
    "zh/:rest*": ":rest*",
  },

  lastUpdated: true,

  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", ...en },
  },
  themeConfig: {
    logo: "../favicon.svg",
    socialLinks: [
      { icon: "github", link: "https://github.com/siaikin/timered-counter" },
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "0G957HAYXU",
        apiKey: "667fc8a81c99ebf4d07240a6a4fae048",
        indexName: "timered-counter",
      },
    },
  },
  markdown: {
    config: (md) => {
      md.use(Footnote);
    },
  },
  vite: {
    define: {
      __TIMED_COUNTER_CDN_FILE_SIZE__: JSON.stringify(await timeredCounterCdnFileSize()),
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL("../theme/CustomHero.vue", import.meta.url)
          ),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          /**
           * @see https://cn.vite.dev/config/shared-options#css-preprocessoroptions
           */
          api: "modern-compiler",
        },
      },
    },
  },
  vue: {
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.startsWith("timered-"),
      },
    },
  },

  sitemap: {
    hostname: "https://timered-counter.netlify.app",
  },
});
