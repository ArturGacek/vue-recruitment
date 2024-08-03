<template>
  <article :class="containerClass">
    <ImageComponent :image="image" />
    <div class="w-full md:w-1/2">
      <h2 class="text-42 mb-5 leading-tight font-bold">
        <slot name="title"></slot>
      </h2>
      <p v-html="content" class="leading-normal"></p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ImageData } from '../interfaces/ImageData';
import ImageComponent from './ImageComponent.vue';

const props = defineProps<{
  image: ImageData;
  mobilePosition: 'top' | 'bottom';
  desktopPosition: 'left' | 'right';
  content: string;
}>();

const containerClass = computed(() => {
  return `
    flex flex-col gap-8 mb-10 items-center ${
      props.mobilePosition === 'top' ? '' : 'flex-col-reverse'
    }
    md:flex-row ${props.desktopPosition === 'left' ? '' : 'md:flex-row-reverse'}
  `;
});
</script>
