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
          link: "https://github.com/itsalimanuel/renux"
        },
        {
          name: "Renix",
          tag: "UI",
          desc: "Renix UI Component Library is a collection of reusable UI components designed for building modern web applications using React, Next.js, and Remix.",
          link: "https://github.com/itsalimanuel/renix"
        },
        {
          name: "Drop",
          tag: "UI",
          desc: "Drop UI Component Library is a collection of reusable UI components designed for building modern web applications using Vue, nuxt.js.",
          link: "https://github.com/itsalimanuel/drop"
        },
        {
          name: "Listra",
          tag: "Crypto",
          desc: "Listra is a decentralized application that allows you to easily create and manage your own NFT marketplace on the Ethereum blockchain.",
          link: "https://www.listra.io/",
        },
        {
          name: "packages-me",
          tag: "mg",
          desc: "OneLinePackages is a website that allows you to easily retrieve all of your installed packages from the NPM registry API in just one line of code.",
          link: "https://www.onelinepackages.xyz/",
        },
        {
          name: "Namask",
          tag: "Ai",
          desc: "Unveiling our AI Customer Service Tool, your next-gen support solution. Enjoy personalized, lightning-fast assistance 24/7, all while gaining valuable insights",
          link: "https://www.namask.xyz/",
        },
        
        {
          name: "Pigeon",
          tag: "JS",
          desc: "Pigeon is a @vuejs component library designed to help website owners easily add chat/live support and contact information to their websites.",
          link: "https://github.com/itsalimanuel/pigeon"
        },
        {
          name: "arabicSlug",
          tag: "JS",
          desc: "Arabic text to Latin and URL slug converter.",
          link: "https://github.com/itsalimanuel/arabicSlug"
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
    <h1 class="text-2xl uppercase text-center">Creator of :</h1>

    <div
      class="grid grid-cols-4 gap-3 mt-8 max-lg:grid-cols-1 w-full text-center"
    >
      <NuxtLink
        class="p-6 card flex flex-col gap-5 justify-between"
        v-for="(i, index) in list"
        :key="index"
        :to="i.link"
        target="_blank"
      >
        <h2 class="text-3xl uppercase">
          {{ i.name }} <sup class="text-sm text-red-500"> / {{ i.tag }}</sup>
        </h2>
        <p class="text-sm">{{ i.desc }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: hsl(0 0% 4%);
  box-shadow: 0px 0px 1px #ddd;
  /* aspect-ratio: 4 / 3; */
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
