<script setup>
import Header from './components/header.vue'
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

</script>
<template>
  <Header/>
  <main class="min-h-screen">
    <NuxtPage />
  </main>
  <Footer/>
</template>

<style>
body{
  @apply min-h-screen bg-black text-white
}
</style>
