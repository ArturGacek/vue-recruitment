<template>
  <article :class="containerClass">
    <img :src="image.imgSrc" :alt="image.alt" :class="imageClass" />
    <div>
      <h2 class="text-42 mb-5 leading-tight font-bold">
        <slot name="title"></slot>
      </h2>
      <p v-html="content" class="leading-normal"></p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ImageData } from '../App.vue';

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

const imageClass = computed(() => {
  return `
    w-full ${
      props.mobilePosition === 'top' || props.mobilePosition === 'bottom'
        ? 'h-auto'
        : ''
    }
    md:w-1/2
  `;
});
</script>
