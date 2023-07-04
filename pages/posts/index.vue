<template>
  <main>
    <ContentList path="/posts" v-slot="{ list }">
      <div
        class="mt-[120px] container mx-auto grid grid-cols-2 gap-3 max-lg:grid-cols-1"
      >
        <NuxtLink
          v-for="post in list"
          :to="post._path"
          :key="post._path"
          class="border p-4 rounded border-gray-600"
        >
          <h2 class="text-xl mb-4">{{ post.title }}</h2>
          <p class="text-sm opacity-70">{{ post.description }}</p>
        </NuxtLink>
      </div>
    </ContentList>
  </main>
</template>
