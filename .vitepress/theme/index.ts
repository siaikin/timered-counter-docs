// .vitepress/theme/index.ts
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import TimeredCounter from "timered-counter/vue";

import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(TimeredCounter)
    enhanceAppWithTabs(app)
  }
} satisfies Theme;
