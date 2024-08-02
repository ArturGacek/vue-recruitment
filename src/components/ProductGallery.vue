<template>
  <div class="product-gallery max-w-[480px] relative">
    <img
      :src="mainImage.imgSrc"
      :alt="mainImage.alt"
      :data-id="mainImage.id"
      class="w-[480px] h-[480px] object-cover"
    />
    <Badge :price="1.99" :originalPrice="500" />
    <div class="thumbnails flex space-x-2 mt-5 justify-between">
      <img
        v-for="thumbnail in thumbnails"
        :key="thumbnail.id"
        :src="thumbnail.imgSrc"
        :alt="thumbnail.alt"
        :data-id="thumbnail.id"
        class="w-[132px] h-[132px]"
        @click="updateMainImage($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Badge from './Badge.vue';
import { ImageData } from '../App.vue';

const props = defineProps<{
  mainImage: ImageData;
  thumbnails: ImageData[];
}>();

const mainImage = ref(props.mainImage);
const thumbnails = ref(props.thumbnails);

const updateMainImage = (event: MouseEvent) => {
  const thumbnail = event.target as HTMLImageElement;
  const filteredThumbnails = thumbnails.value.filter(
    (thumb) => thumb.id !== thumbnail.dataset.id
  );

  const newMainImage: ImageData = {
    imgSrc: thumbnail.src,
    alt: thumbnail.alt,
    id: thumbnail.dataset.id!,
  };

  thumbnails.value = [...filteredThumbnails, mainImage.value];
  mainImage.value = newMainImage;
};
</script>
