<script setup>
const colorMode = useColorMode()
const isLightMode = ref(false)
const toggleColorTheme = () => {
  isLightMode.value = !isLightMode.value
  colorMode.preference = isLightMode.value ? 'light' : 'dark'
}
const links = [[
{
  label: 'Home',
  to: '/',
},
// {
//   label: 'About',
//   to: '/about',
// },
{
  label: 'Blog',
  to: '/blog',
},
{
  label: 'Projects',
  to: '/projects',
},
{
  label: 'Contact',
  to: '/contact',
}
], [
  {label: 'color'}
]]
</script>

<template>
<UHorizontalNavigation :links="links" class="fixed left-0 top-0 z-50 dark:bg-[#1c1b22] bg-[#ffffff]">
  <template #default="{link}">
      <template v-if="link.label === 'color'">
        <ColorScheme><UToggle @click="toggleColorTheme" v-model:model-value="isLightMode" off-icon="i-system-uicons-sun" on-icon="i-system-uicons-moon" size="lg" /></ColorScheme>
      </template>
      

  </template>
</UHorizontalNavigation>
</template>