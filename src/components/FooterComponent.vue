<template>
  <footer class="footer p-5">
    <div class="text-center text-12 leading-tight mb-1">
      We accept the following credit cards
    </div>
    <div class="text-center">
      <ImageComponent :image="image" class="inline-block" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import ImageComponent from './ImageComponent.vue';
import { ImageData } from '../App.vue';

const image: ImageData = {
  imgSrc: '/src/assets/cards.svg',
  alt: 'Accepted payment methods',
  id: '222',
};
</script>
