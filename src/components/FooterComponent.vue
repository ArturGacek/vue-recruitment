<template>
  <footer class="footer p-5">
    <div class="text-center text-12 leading-tight mb-1">
      We accept the following credit cards
    </div>
    <div class="text-center leading-none">
      <ImageComponent :image="image" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import ImageComponent from './ImageComponent.vue';
import { ImageData } from '../interfaces/ImageData';

defineProps<{
  image: ImageData;
}>();
</script>
