<script setup>
import { ref, reactive } from 'vue'
const links = reactive({
    urls: [
        {
            name: 'Talks',
            url: '/',
            tag: 'Talks'
        },
        {
            name: 'Posts',
            url: '/posts'
        }
    ]
})
</script>

<template>
    <div
        class="container max-lg:px-[40px] absolute top-0 w-full z-10 left-1/2 -translate-x-1/2 py-10 flex items-center justify-between text-xs uppercase">
        <NuxtLink to="/" class="text-xs group flex items-center gap-[1px]">
          <span>A</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">l</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">i</span>
          <span></span>
          <span></span>
          <span></span>
          <span>K</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">h</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">a</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">l</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">o</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">u</span>
          <span class="hidden group-hover:block transition-all duration-500 ease-in-out">f</span>
        </NuxtLink>
        <div class="flex items-center gap-2  ">
            <NuxtLink v-for="(link, index) in links.urls" class="opacity-50 hover:opacity-100 transition-all"
                :key="index" :to="link.url">{{ link.name }} <sup v-if="link.tag === 'Talks'" class="font-bold">/soon</sup></NuxtLink>
        </div>
        <NuxtLink to="https://t.me/itsalikhalouf" class="relative gap-2 group">
            <span>let't talk</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-3 h-3 absolute top-1/2 -translate-y-1/2 -right-4 transition-all group-hover:-right-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </NuxtLink>
    </div>
</template>