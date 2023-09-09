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
          name: "Renux",
          tag: "UI",
          desc: "Renux UI Component Library is a collection of reusable UI components designed for building modern web applications using nuxtjs",
        },
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
  mounted: () => {
    const updateCursor = ({ x, y }) => {
      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--y", y);
    };

    document.body.addEventListener("pointermove", updateCursor);
  },
};
</script>

<template>
  <div class="container max-lg:px-[20px] mx-auto my-8">
    <audio ref="audioPlayer" src="/click.mp3"></audio>
    <h1 class="text-2xl uppercase text-center">Creator of:</h1>
    <div
    
      class="grid grid-cols-4 gap-3 mt-8  max-lg:grid-cols-1 w-full text-center"
    >
      <div
        class="p-6 card flex flex-col gap-5 justify-between"
        v-for="(i, index) in list"
        :key="index"
      >
        <h2 class="text-3xl uppercase">
          {{ i.name }} <sup class="text-sm text-red-500"> / {{ i.tag }}</sup>
        </h2>
        <p class="text-sm">{{ i.desc }}</p>
      </div>
      <!-- <div
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
          {{ i.name }} <sup class="text-sm text-red-500"> / {{ i.tag }}</sup>
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
        <p class="opacity-70 font-normal">
          {{ i.desc }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.card {
  background: hsl(0 0% 4%);
  box-shadow: 0px 0px 1px #ddd;
  aspect-ratio: 4 / 3;
  position: relative;
  cursor: pointer;
  transition: background 0.1s;
}

.card:hover {
  --active: 1;
}

.card:after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
    hsl(0 0% 100% / 0.15),
    transparent 15vmin
  );
  background-attachment: fixed;
  opacity: var(--active, 0);
  transition: opacity 0.2s;
  pointer-events: none;
}

.card:before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at calc(var(--x) * 1px) calc(var(--y) * 1px),
      hsl(0 0% 100% / 0.5),
      transparent 15vmin
    ),
    transparent;
  background-attachment: fixed;
  pointer-events: none;
  mask:
    linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
    linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
    linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
    linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;
}

span {
  font-family: sans-serif, system-ui;
  position: absolute;
  bottom: 0.65rem;
  right: 0.65rem;
  font-weight: bold;
  font-size: 2rem;
  color: hsl(0 0% 100%);
}
</style>
