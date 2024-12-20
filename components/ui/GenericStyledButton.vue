<script setup lang="ts">
import clsx from 'clsx';
const props = defineProps<{
  text?: string;
  onClick?: (e: Event) => void;
  TwStyles?: string;
  fileUrl?: string;
  fileName?: string;
}>();


const handlePress = (e: Event) => {
  if (props.fileUrl && props.fileName) {
    const link = document.createElement('a');
    link.href = props.fileUrl;
    link.download = props.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  if (props.onClick) {
    props.onClick(e);
  }
};
</script>
<template>
  <button 
  :class="clsx('px-4 py-2 rounded-lg font-custom border border-indigo-400 hover:bg-indigo-700 text-indigo-400 hover:text-zinc-200', 
  TwStyles, 'active:translate-y-2 active:scale-110 hover:bg-indigo-700 hover:text-zinc-200 transition-all')" 
  @click="handlePress">{{ props.text }}</button>
</template>

<script setup lang="ts">

</script>