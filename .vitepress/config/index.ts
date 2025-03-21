import { defineConfig } from "vitepress";
import { fileURLToPath } from "node:url";
import Footnote from "markdown-it-footnote";
import zh from "./zh";
import en from "./en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TimeredCounter",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],

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
        appId: "9NV3G9B3HR",
        apiKey: "038b34dc39e8d6c3f0210032459db0e8",
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
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
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
