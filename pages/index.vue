<script setup>
import { inject } from '@vercel/analytics'
const viewCV = () => {
  window.open('/resources/JoshMcLain_SoftwareEngineer_CV.pdf', '_blank')
}
const runtimeConfig = useRuntimeConfig()
useSeoMeta({
  title: 'Josh McLain - Software Engineer',
  description: 'Experienced software engineer specializing in fullstack web development. View my portfolio and professional experience.',
  ogTitle: 'Josh McLain - Software Engineer',
  ogDescription: 'Experienced software engineer specializing in fullstack web development. View my portfolio and professional experience.',
  ogImage: `${runtimeConfig.public.envDomain}/images/logo.png`,
  ogUrl: `${runtimeConfig.public.envDomain}`,
  twitterTitle: 'Josh McLain - Software Engineer',
  twitterDescription: 'Experienced software engineer specializing in fullstack web development. View my portfolio and professional experience.',
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
inject();
onMounted(() => {
  useGSAP()
})
const smoothScroll = (e) => {
  e.preventDefault();
  const about = document.getElementById('about')
  about.scrollIntoView({ behavior: 'smooth', })
}
</script>
<template>
  <main class="">

    <div class="-mt-2 text-center min-h-screen flex flex-col justify-center items-center">
      <h1 id="heroTitle" class="text-4xl font-bold tracking-wider fade-in-slide">Josh<span
          class="text-primary">McLain</span></h1>
      <p v-gsap.animateText.slow id="slogan" class="text-xs h-[18px] leading-8 inline-block">I'm a software
        engineer, specializing in fullstack web development.</p>
      <UButton label="Learn more" variant="outline" class="mt-5" size="lg" icon="i-ei-chevron-right"
        @click="smoothScroll" :trailing="true" to="#" />
    </div>
    <div id="about" class="min-h-screen w-full flex flex-col justify-center items-center">
      <img v-gsap.whenVisible.from="{ opacity: 0, x: -52, start: 'bottom 90%', end: 'bottom 40%' }"
        src="/images/172-dQGDXGzJY5w.jpeg" alt="Josh McLain"
        class="rounded-full w-40 h-40 mb-6 border-primary border-4" />
      <UDivider class="w-4/5 my-3" size="md" label="A little about me" />
      <article class="text-center text-sm max-w-screen-md leading-5 space-y-4">
        <p>A complex problem-solver with analytical and driven mindset.

          Familiar with wide range of programming utilities and
          languages.</p>

        <p>Knowledgeable of backend and frontend
          development requirements and best practices, comfortable in any environment.</p>

        <p>Dedicated to achieving demanding development objectives
          according to tight schedules while producing impeccable code.</p>

        <p>A Collaborative
          team player with excellent technical abilities and a history of mentoring peers.</p>

        <p>5 years of
          professional experience and a lifetime in the related fields.</p>

        <p>Self taught, motivated and passionate. It's more than a career, I love what I do.</p>
        <UButton label="View Resume" variant="outline" icon="i-ri-file-download-fill" trailing class="mt-4"
          @click="viewCV" />
        <div class="space-x-6 mt-6">
          <ULink to="https://github.com/daemon-node-byte" target="_blank">
            <UIcon name="i-octicon-logo-github-24" class="text-3xl" />
          </ULink>
          <ULink to="https://www.linkedin.com/in/joshmclain45" target="_blank">
            <UIcon name="i-logos-linkedin" class="text-3xl" />
          </ULink>
        </div>
      </article>
    </div>
  </main>
</template>

<style>
#heroTitle {
  opacity: 0;
  transform: translateY(-500px);
  transition: all 1s ease-in;
  animation: fade-in-slide 1s linear .5s 1 forwards;
}

@keyframes fade-in-slide {
  0% {
    opacity: 0;
    transform: translateY(-500px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>