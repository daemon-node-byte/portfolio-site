<script setup>
import { useAsyncData } from 'nuxt/app';


const { data: docs } = await useAsyncData('content', () =>
  queryContent().find()
);
</script>

<template>
  <main class="pt-14 max-w-[1000px] h-full">
    
      <div class="flex flex-wrap">

        
        <NuxtLink v-for="doc in docs" :to="`${doc._path}`" :key="doc._path">
          <div class="p-4 border rounded-lg mx-2 my-4 w-[400px]">
            <img :src="doc.cover" :alt="doc.title" />
            <h3 class="mt-4 mb-2 text-xl">
              {{ doc.title }}
            </h3>
            <p class="text-sm">{{ doc.description }}</p>

          </div>
        </NuxtLink>
        
      </div>
    
  </main>
</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>

