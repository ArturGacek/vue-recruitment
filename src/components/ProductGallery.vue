<template>
  <div class="product-gallery max-w-[480px] relative">
    <ImageComponent :image="mainImage" width="480px" height="480px" />
    <Badge :price="1.99" :originalPrice="500" />
    <div class="thumbnails flex space-x-2 mt-5 justify-between">
      <ImageComponent
        v-for="thumbnail in thumbnails"
        :image="thumbnail"
        :key="thumbnail.id"
        width="132px"
        height="132px"
        @click="updateMainImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Badge from './Badge.vue';
import { ImageData } from '../App.vue';
import ImageComponent from './ImageComponent.vue';

const props = defineProps<{
  mainImage: ImageData;
  thumbnails: ImageData[];
}>();

const mainImage = ref(props.mainImage);
const thumbnails = ref(props.thumbnails);
const updateMainImage = (image: ImageData) => {
  console.log(image);

  const filteredThumbnails = thumbnails.value.filter(
    (thumb) => thumb.id !== image.id
  );

  thumbnails.value = [...filteredThumbnails, mainImage.value];
  mainImage.value = image;
};
</script>
