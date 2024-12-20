<script setup>
console.log('home page')
</script>
<template>
  <main class="">
    <div class="-mt-2 text-center min-h-screen flex flex-col justify-center items-center">
      <h1 class="text-4xl font-bold tracking-wider">Josh<span class="text-primary">McLain</span></h1>
      <p class="text-xs leading-8">I'm a software engineer, specializing in web development</p>
      <UButton label="Learn more" variant="outline" class="mt-5" size="lg" icon="i-ei-chevron-right" :trailing="true" to="#about"/>
    </div>
    <div id="about" class="min-h-screen"></div>
  </main>
</template>