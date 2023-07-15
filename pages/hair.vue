<template>
  <div class="container h-screen mx-auto">
    <div class="flex flex-col gap-2 justify-center h-full">
      <h1 class="text-5xl font-mono max-w-4xl max-lg:text-2xl mb-[50px]">
        Hair me!
      </h1>
      <label for="name" class="flex flex-col gap-2">
        <span class="text-xs uppercase">Name</span>
        <input
          type="text"
          placeholder="your name"
          class="bg-transparent p-2 border w-fit text-xs palceholder:text-xs placeholder:uppercase"
        />
      </label>
      <label for="email" class="flex flex-col gap-2">
        <span class="text-xs uppercase">email</span>
        <input
          type="text"
          name="email"
          placeholder="your email"
          class="bg-transparent p-2 border w-fit text-xs palceholder:text-xs placeholder:uppercase"
        />
      </label>
      <div class="flex flex-warp">
        <label for="1000" class="p-3 bg-white text-black relative">
            <span>$ 1K</span>
          <input type="radio" name="100" id=""  class="absolute inset-0 opacity-0"/>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
