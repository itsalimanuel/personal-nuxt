<script>
export default {
  data() {
    return {
      list: [
        {
          name: "Navio AI",
          link: "https://t.me/naviotour_bot",
        },
        {
          name: "NaviTour",
          link: "https://navitour.xyz/",
        },
        {
          name: "Hemaya Dubai",
          link: "https://hemayaschools.ae/",
        },
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
  <div class="container mx-auto mt-[70px] max-lg:px-5">
    <h2 class="mb-[70px] text-center text-3xl font-semibold">Projects</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <NuxtLink
          v-for="i in list"
          :key="i.name"
          :to="i.link"
          target="_blank"
          class="group relative p-6 rounded-lg border border-gray-300 bg-white shadow-lg transition-transform transform hover:-translate-y-2"
      >
        <h3
            class="text-center text-lg font-medium uppercase tracking-wider text-gray-800 transition-colors group-hover:text-blue-500"
        >
          {{ i.name }}
        </h3>
        <div
            class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-lg"
        ></div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.group:hover .hover-effect::before {
  @apply h-full opacity-75;
}
</style>
