<script setup>
const colorMode = useColorMode()
const isLightMode = ref(false)
const toggleColorTheme = () => {
  isLightMode.value = !isLightMode.value
  colorMode.preference = isLightMode.value ? 'dark' : 'light'
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
<UHorizontalNavigation :links="links" class="fixed max-w-screen-lg top-0 z-50">
  <template #default="{link}">
      <template v-if="link.label === 'color'">
        <!-- <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme> -->
        <ColorScheme><UToggle @click="toggleColorTheme" v-model:model-value="isLightMode" off-icon="i-system-uicons-moon" on-icon="i-system-uicons-sun" size="lg" /></ColorScheme>
      </template>


  </template>
</UHorizontalNavigation>
</template>