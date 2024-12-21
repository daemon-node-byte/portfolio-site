<script setup>
import { useAsyncData } from 'nuxt/app';
const { data: docs } = await useAsyncData('content', () =>
  queryContent().find()
);
</script>

<template>
  
  <main class="pt-14 max-w-[1000px] h-full">
      <NuxtLayout>

      
      <div class="flex flex-wrap">
        <template v-for="doc in docs">
          
          
          <UCard class="mb-8 md:w-96 md:mx-2 h-max" :ui="{ background: 'dark:bg-zinc-800 bg-zinc-200'}" >
            <template #header>
              <h3 class="text-xl text-center">
                {{ doc.title }}
              </h3>
            </template>
            <div>
              <img :src="doc.cover" :alt="doc.title" />
              <p class="text-xs text-end mt-2">{{ new Date(doc.date).toLocaleDateString() }}</p>
              <p class="text-sm p-2">{{ doc.description }}</p>
            </div>
            <template #footer>
              <div class="max-w-max ml-auto">
                
                <UButton :to="doc._path" icon="i-tabler-arrow-big-right-lines" trailing class="" label="Read Post"></UButton>
              </div>
            </template>
          </UCard>
        </template>
        
      </div>
      
      <!-- <div class="flex flex-wrap">
        
        
        <NuxtLink v-for="doc in docs" :to="`${doc._path}`" :key="doc._path">
          <div class="p-4 border rounded-lg mx-2 my-4 w-[400px]">
            <img :src="doc.cover" :alt="doc.title" />
            <h3 class="mt-4 mb-2 text-xl">
              {{ doc.title }}
            </h3>
            <p class="text-sm">{{ doc.description }}</p>
            
          </div>
        </NuxtLink>
        
      </div> -->
      
    </NuxtLayout>
    </main>
</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>

