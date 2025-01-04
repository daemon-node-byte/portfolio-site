<script setup lang="ts">

</script>

<template>
<UContainer class="font-custom">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</UContainer>
  <UNotifications />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>