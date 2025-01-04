<script lang="ts" setup>

</script>

<template>
  <div>
    <div data-v-4eb16d15="" data-v-2c5e968f="" data-v-41e2cfe7="" class="relative bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 rounded-lg flex flex-col items-center justify-center gap-3 w-full aspect-[3/2] w-full relative" style="overflow: hidden;">
      <section data-v-2c5e968f="">
      <div data-v-2c5e968f="" class="Dot" style="background-color: rgb(34, 197, 94); width: 800px;"></div>
      <h1 data-v-2c5e968f="" style="translate: none; rotate: none; scale: none; transform: translate(-222.398px, -32px); opacity: 0;"> New era of </h1>
      <h1 data-v-2c5e968f="" style="translate: none; rotate: none; scale: none; transform: translate(-222.398px, -32px); opacity: 0;"> animation </h1>
    </section>
    <div data-v-4eb16d15="" class="Crosshair">
      <div data-v-4eb16d15="" class="Vertical absolute inset-y-0 left-1/2 translate-x-[-50%] w-[1px] bg-gradient-to-b from-transparent dark:via-white/20 via-black/10 to-transparent z-[-1]"></div>
    <div data-v-4eb16d15="" class="Horizontal absolute inset-x-0 top-1/2 translate-y-[-50%] h-[1px] bg-gradient-to-r from-transparent dark:via-white/20 via-black/10 to-transparent z-[-1]">

    </div></div>
    <div data-v-4eb16d15="" class="absolute top-2 left-4 dark:text-white/80 text-gray-700">
      <pre data-v-4eb16d15="">

    </pre>
    </div>
    <button data-v-4eb16d15="" hide-scrollbar="" class="dark:text-white/25 text-black/25 absolute bottom-2 inset-x-0 px-4 overflow-scroll text-[14px]">
      <pre data-v-4eb16d15=""></pre>
    </button>
  </div>
    <section v-gsap.timeline.pinned>
      <div class="Dot " v-gsap.add.to="{ width: '800px' }"></div>
      <h1 
      v-gsap.add.fromTo="[{ opacity: 0, y: 32 }, { opacity: 1, y: 0 }]"
      v-gsap.add.to="{ opacity: 0, y: -32 }">New era of</h1>
      <h1 
      v-gsap.add.withPrevious.fromTo="[{ opacity: 0, y: 32 }, { opacity: 1, y: 0 }]"
      v-gsap.add.to="{ opacity: 0, y: -32 }">animation</h1>
    </section>
  </div>
</template>