<script setup>

import { useAsyncData } from 'nuxt/app';
const { data: docs } = await useAsyncData('content', () =>
  queryContent().find()
);
const runtimeConfig = useRuntimeConfig()
useSeoMeta({
  title: 'Josh McLain - Software Engineer - Blog',
  description: 'Experienced software engineer specializing in fullstack web development. View my blog posts.',
  ogTitle: 'Josh McLain - Software Engineer - Blog',
  ogDescription: 'Experienced software engineer specializing in fullstack web development. View my my blog posts.',
  ogImage: `${runtimeConfig.public.envDomain}/images/logo.png`,
  ogUrl: `${runtimeConfig.public.envDomain}`,
  twitterTitle: 'Josh McLain - Software Engineer - Blog',
  twitterDescription: 'Experienced software engineer specializing in fullstack web development. View my my blog posts.',
  twitterImage: `${runtimeConfig.public.envDomain}/images/logo.png`,
  twitterCard: 'summary_large_image'
})


useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/images/favico/favicon.ico'
    }
  ]
})
</script>

<template>

  <main class="pt-14 max-w-[1200px] h-full">
    <NuxtLayout>


      <div class="flex md:flex-col flex-wrap">
        <div v-for="doc in docs" :key="doc._id">
          <div
            class="hidden md:block dark:bg-gray-800 bg-gray-500 my-3 p-4 rounded-lg shadow-lg relative cursor-pointer"
            @click="navigateTo(`/blog/posts/${doc.slug}`)">

            <p class="text-xs pb-2">{{ new Date(doc.date).toLocaleDateString() }}</p>
            <img class="h-64 float-start mr-6 border rounded-lg" :src="doc.cover" :alt="doc.title" />

            <!-- </div> -->
            <!-- <div class="inline-block ml-8 h-full align-top"> -->
            <h3 class="text-2xl font-bold mb-2">{{ doc.title }}</h3>
            <hr class="py-2" />
            <p class="text-md">{{ doc.description }}</p>
            <!-- </div> -->
          </div>




          <UCard class="mb-8 md:w-96 md:mx-2 h-max md:hidden" :ui="{ background: 'dark:bg-zinc-800 bg-zinc-200' }">
            <template #header>
              <h3 class="text-xl text-center">
                {{ doc.title }}
              </h3>
            </template>
            <div class=" ">
              <img :src="doc.cover" :alt="doc.title" />
              <p class="text-xs text-end mt-2">{{ new Date(doc.date).toLocaleDateString() }}</p>
              <p class="text-sm p-2">{{ doc.description }}</p>
            </div>
            <template #footer>
              <div class="max-w-max ml-auto">

                <UButton :to="doc._path" icon="i-tabler-arrow-big-right-lines" trailing class="" label="Read Post">
                </UButton>
              </div>
            </template>
          </UCard>
        </div>

      </div>

    </NuxtLayout>
  </main>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>
