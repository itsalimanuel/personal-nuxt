<script>
import { defineProps } from "vue";

export default {
  props: {
    textColor: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      list: [
        {
          name: "Renix",
          tag: "UI",
          desc: "Renix UI Component Library is a collection of reusable UI components designed for building modern web applications using React, Next.js, and Remix.",
        },
        {
          name: "Pigeon",
          tag: "JS",
          desc: "Pigeon is a @vuejs component library designed to help website owners easily add chat/live support and contact information to their websites.",
        },
        {
          name: "arabicSlug",
          tag: "JS",
          desc: "Arabic text to Latin and URL slug converter.",
        },
        {
          name: "araslug",
          tag: "PHP",
          desc: "Arabic text to Latin and URL slug converter.",
        },
        {
          name: "Arab Packs",
          tag: "IO",
          desc: "Arab Packs Community: A collaborative hub of Arab developers, hosting diverse open source projects across technology domains.",
        },
      ],
    };
  },
  methods: {
    playAudio() {
      const audioPlayer = this.$refs.audioPlayer;
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    },
  },
};
</script>

<template>
  <div class="container max-lg:px-[20px] mx-auto my-8">
    <audio ref="audioPlayer" src="/click.mp3"></audio>
    <h1 class="text-2xl font-mono uppercase">Creator of:</h1>
    <div class="grid grid-cols-2 gap-3 mt-8 max-lg:flex max-lg:flex-col w-full">
      <div
        v-for="(i, index) in list"
        :key="index"
        class="cursor-pointer relative"
        :class="[
          'p-5',
          'rounded',
          'border',
          index === 4 && index % 2 !== 1 ? 'col-start-1 col-end-3' : '',
          textColor === 'black'
            ? 'border-black'
            : textColor === 'white'
            ? 'border-white'
            : 'border',
        ]"
        @mouseenter="playAudio"
      >
        <h2
          class="text-3xl"
          :class="[
            textColor === 'black'
              ? 'text-gray-800'
              : textColor === 'white'
              ? 'text-gray-200'
              : 'text-yellow-900',
          ]"
        >
          {{ i.name }} <sup class="text-sm">{{ i.tag }}</sup>
        </h2>
        <hr
          class="my-4"
          :class="[
            textColor === 'black'
              ? 'border-black'
              : textColor === 'white'
              ? 'border-white'
              : 'border-black',
          ]"
        />
        <p class="opacity-70 font-normal font-mono">
          {{ i.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
