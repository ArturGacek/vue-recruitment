<template>
  <div class="product-gallery max-w-[360px] md:max-w-[480px] relative">
    <ImageComponent
      :image="mainImage"
      width="w-[360px] md:w-[480px]"
      height="h-[360px] md:h-[480px]"
    />
    <Badge :price="1.99" :originalPrice="500" />
    <div class="thumbnails flex space-x-2 mt-5 justify-between w-">
      <ImageComponent
        v-for="thumbnail in thumbnails"
        :image="thumbnail"
        :key="thumbnail.id"
        width="w-24 md:w-32"
        height="w-24 md:w-32"
        additionalClasses="max-w-none"
        @click="updateMainImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Badge from './Badge.vue';
import { ImageData } from '../interfaces/ImageData';
import ImageComponent from './ImageComponent.vue';

const props = defineProps<{
  mainImage: ImageData;
  thumbnails: ImageData[];
}>();

const mainImage = ref(props.mainImage);
const thumbnails = ref(props.thumbnails);
const updateMainImage = (image: ImageData) => {
  const filteredThumbnails = thumbnails.value.filter(
    (thumb: ImageData) => thumb.id !== image.id
  );

  thumbnails.value = [...filteredThumbnails, mainImage.value];
  mainImage.value = image;
};
</script>
