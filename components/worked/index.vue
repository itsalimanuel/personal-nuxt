<template>
  <div class="container mx-auto max-lg:px-[20px] my-[70px]">
    <h2
      class="text-center mb-[70px] text-xl font-normal tracking-[2px] uppercase"
    >
      Worked with:
    </h2>
    <div
      class="mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"
    >
      <NuxtImg src="../../artfi.svg" class="w-22 filter-omg" />
      <NuxtImg src="../../starex.png" class="w-18 h-20 filter-omg" />
      <NuxtImg src="../../carbon.svg" class="w-16 h-20 filter-omg" />
      <NuxtImg src="../../aqua.png" class="w-16 h-16 filter-omg" />
      <NuxtImg src="../../choose.svg" class="w-20 h-20 filter-omg" />
      <NuxtImg src="../../nexe.png" class="w-16 h-16 filter-omg" />
      <NuxtImg src="../../sputink.png" class="w-22 h-20 filter-omg" />
    </div>
  </div>
</template>

<style>
.filter-omg {
  transition: 100ms all ease-in-out;
  filter: brightness(0) invert(1);
}
.filter-omg:hover{
  filter: none;
}
</style>
