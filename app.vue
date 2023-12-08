<script setup>
import Header from "./components/header.vue";
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
<template>
  <SpeedInsights />
  <Header />
  <main class="min-h-screen">
    <NuxtPage />
  </main>
  <Footer />
</template>

<style>
body {
  @apply min-h-screen bg-black text-white;
}
</style>
