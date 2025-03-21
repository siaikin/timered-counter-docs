// .vitepress/theme/index.ts
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "timered-counter";

import "./style.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;
