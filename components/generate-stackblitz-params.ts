/**
 * @see https://github.com/vueComponent/ant-design-vue/blob/main/site/src/utils/generateOnlineDemo.ts
 */

import { type Project } from "@stackblitz/sdk";
import packageInfo from "../package.json";

const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TimeredCounter Demo</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="overflow-hidden">
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`;

const appVue = `<template>
<div class="demo-container flex flex-col justify-center border p-4 mt-4 text-sm">
  <Demo />
</div>
</template>

<script>
import { defineComponent } from "vue";
import Demo from "./demo.vue";

export default defineComponent({
  components: {
    Demo,
  },
  });
</script>

<style>
.demo-container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 1px;
  padding: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.vue-to-counter,
timered-counter,
timered-counter-number,
timered-counter-datetime-duration,
timered-counter-string {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 2.25rem;
  line-height: 2.5rem;
}

hr {
  border-top: 1px solid #e2e8f0;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
body {
  padding: 1rem;
}
</style>
`;

const mainJs = `import { createApp } from 'vue';
import 'timered-counter';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');
`;

const viteConfig = `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
});
`;

function getPackageJson(code: string) {
  return {
    name: "timered-counter-demo",
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "vite build",
      preview: "vite preview",
    },
    dependencies: {
      ...getDeps(code),
      "timered-counter": packageInfo.dependencies['timered-counter'],
    },
    devDependencies: {
      "@vitejs/plugin-vue": "^5.1.4",
      vite: "^6.0.5",
    },
  };
}

function getDeps(code: string) {
  const deps: Record<string, string> = Object.assign(
    {},
    packageInfo.dependencies,
    packageInfo.devDependencies
  );
  return (code.match(/from "([a-zA-Z@/-]+)";\n/g) || [])
    .map((v) => v.slice(6, v.length - 3))
    .reduce(
      (prevV, dep) => {
        prevV[dep] = deps[dep] || "latest";
        return prevV;
      },
      {} as Record<string, string>
    );
}

type Meta = {
  title: string;
};

// stackblitz
export function getCodeStackblitzParams(
  files: { filename: string; content: string }[],
  meta: Meta
): Project {
  for (const item of files) {
    if (item.filename === 'All') item.filename = "demo.vue";
  }
  files = files.filter(({ filename }) => filename !== "DemoContainer.vue");

  return {
    title: meta.title,
    description: "",
    template: "node",
    files: {
      ...files.reduce(
        (prev, { filename, content }) => {
          prev[`src/${filename}`] = content;
          return prev;
        },
        {} as Record<string, string>
      ),
      "package.json": JSON.stringify(
        getPackageJson(files.map(({ content }) => content).join("\n")),
        null,
        2
      ),
      "index.html": indexHtml,
      "src/App.vue": appVue,
      "src/main.js": mainJs,
      "vite.config.js": viteConfig,
    },
  };
}
