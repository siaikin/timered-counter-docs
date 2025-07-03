# Vue Integration

## Installation
First, please follow the [Getting Started](../getting-started.md) documentation to install.

## Import
In a Vue project, you can import `timered-counter` in the following ways:

Globally register `timered-counter` in the project entry file:
```typescript
import { createApp } from 'vue';
import TimeredCounter from 'timered-counter/vue';
import App from './App';

const app = createApp(App);

app.use(TimeredCounter).mount('#app');
```