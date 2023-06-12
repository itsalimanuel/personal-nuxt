<script setup>
import { ref, reactive } from 'vue'
import logo from '@/public/logo.png'
const title = ref('AK');
const links = reactive({
    urls: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]
})
</script>

<template>
    <div
        class="container absolute top-0 w-full z-10 left-1/2 -translate-x-1/2 py-5 flex items-center justify-between text-xs uppercase">
        <div class="text-xs  flex items-center gap-2">
            <img :src="logo" alt="" class="w-10 h-10">
            {{ title }}
        </div>
        <div class="flex items-center gap-2  ">
            <NuxtLink v-for="(link, index) in links.urls" class="text-gray-400 hover:text-gray-200 transition-all"
                :key="index" :to="link.url">{{ link.name }}</NuxtLink>
        </div>
        <NuxtLink to="talk" class="relative gap-2 group">
            <span>let't talk</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-3 h-3 absolute top-1/2 -translate-y-1/2 -right-4 transition-all group-hover:-right-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </NuxtLink>
    </div>
</template>