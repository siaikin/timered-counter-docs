# Vue 集成

## 安装
首先，请先按照 [快速开始](../getting-started.md) 文档进行安装。

## 导入
在 Vue 项目中，你可以通过以下方式导入 `timered-counter`：

在项目入口文件中全局注册 `timered-counter`：
```typescript
import { createApp } from 'vue';
import TimeredCounter from 'timered-counter/vue';
import App from './App';

const app = createApp(App);

app.use(TimeredCounter).mount('#app');
```
