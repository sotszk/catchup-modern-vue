<script setup lang="ts">
import { onBeforeMount } from "vue";
import { name } from "../package.json";
import { FetchError } from './utils/error';

onBeforeMount(() => {
  fetch('https://dummyjson.com/products/10000')
    .then(res => {
      if (!res.ok) {
        throw new FetchError(res.statusText, res.status)
      }
      return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err instanceof FetchError) {
        console.log('FetchError occurred')
        console.error(err.getStatusCode())
      } else {
        console.error(err.message || err.name)
      }
    })
})
</script>

<template>
  <div class="container">
    <span inline-block px4 py2 border border-solid border-white rounded-10>This package is apps/{{ name }}</span>
  </div>
</template>

<style>
:root {
  --max-width: 1100px;
  --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
  --background-end-rgb: 0, 0, 0;

  --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
</style>

<style scoped>
.container {
  padding: 16px;
}
</style>
