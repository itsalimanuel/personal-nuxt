<template>
  <main class="mt-[100px] max-w-lg mx-auto max-lg:px-[30px]" >
    <ContentDoc/>
  </main>
</template>


<style>
 pre {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 4px;
        font-family: monospace;
        overflow-x: auto;
        margin-bottom: 15px;
    }

    code {
        font-family: monospace;
        color: #333;
        background-color: #f5f5f5;
        padding: 2px 4px;
        border-radius: 4px;
       
    }
h1{
  @apply text-5xl mb-5
}
h2{
  @apply text-3xl font-bold mb-3
}
p{
  @apply text-sm text-gray-400 mb-5 
}
li{
  @apply my-3 text-lg 
}
img{
  @apply h-auto mx-auto
}
hr{
  @apply py-3
}
</style>