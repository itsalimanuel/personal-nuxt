<script>
export default {
  data() {
    return {
      list: [
        {
          name: "Artfi",
          link: "https://www.artfi.world",
        },
        {
          name: "Artfi Token",
          link: "https://www.artfitoken.io",
        },
        {
          name: "StarEX",
          link: "https://www.starex.sg",
        },
        {
          name: "StarEX Academy",
          link: "https://www.starexacademy.sg",
        },
        {
          name: "Carbon mobile",
          link: "https://www.carbonmobile.com",
        },
        {
          name: "PPL",
          link: "https://www.media-ppl.ru",
        },
        {
          name: "choose",
          link: "https://choose.digital",
        },
        {
          name: "Ferrum",
          link: "https://ferrumpanel.ru",
        },
        
      ],
    };
  },
};
</script>

<template>
  <div class="mt-[70px] container max-lg:px-[20px] mx-auto">
    <h2 class="text-center mb-[70px] text-3xl">Projects</h2>
    <div class="grid grid-cols-1 gap-4">
      <NuxtLink
        :to="i.link"
        v-for="i in list"
        target="_blank"
        class="p-6 rounded border hover-effect"
      >
        <h3 class="text-center text-2xl uppercase font-thin">{{ i.name }}</h3>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.hover-effect {
  position: relative;
  overflow: hidden;
}

.hover-effect::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: rgba(214, 213, 213, 0.561);
  opacity: 0;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
}

.hover-effect:hover::before {
  height: 100%;
  opacity: 1;
}
</style>
