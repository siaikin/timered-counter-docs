---
layout: page
---

<script setup>
import customElementsJson from '../../node_modules/timered-counter/custom-elements.json'; 

if (!import.meta.env.SSR) {
  import('api-viewer-element')
    .then(() => {
      const apiViewer = document.querySelector('api-viewer');
      apiViewer.manifest = customElementsJson;
    });
}
</script>

<api-viewer></api-viewer>
