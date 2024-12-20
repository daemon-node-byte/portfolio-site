<script setup>
import { useAsyncData } from 'nuxt/app';
const route = useRoute();

const { data: doc } = await useAsyncData('content', () =>
  queryContent('blog/posts').where({ slug: route.params.slug }).findOne()
);
</script>

<template>
  <main class="pt-14 h-full">
    <article id="content-container" v-if="doc">
      <img :src="doc.cover" />
      <h1 id="content-title">{{ doc.title }}</h1>
        <ContentDoc id="content" />
    </article>
  </main>
</template>

<style>
#content-container {
  max-width: 850px;
  margin: 0 auto;
  padding: 1rem;
}
#content pre {
  margin: 24px 36px;
  border: 1px solid #eaeaea;
  padding: 16px;
}
#content h1, #content-title {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: bolder;
}
#content h2 {
  font-size: 1.5rem;
  margin: 1rem 0;
  font-weight: bold;
}
#content h3 {
  font-size: 1.25rem;
  margin: 1rem 0;
  font-weight: bold;
}

#content p {
  margin-bottom: 1rem;
  line-height: 32px;
}

#content ul {
  list-style: disc;
  padding-left: 24px;
}

#content li {
 padding: 12px 0;
}

#content strong {
  font-size: 1.15rem;
}
</style>