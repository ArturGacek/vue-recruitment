<template>
  <img
    :src="image.imgSrc"
    :alt="image.alt"
    :class="[imageClasses, additionalClasses]"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ImageData } from '../App.vue';

const props = defineProps<{
  image: ImageData;
  width?: string;
  height?: string;
  onClick?: (image: ImageData) => void;
  additionalClasses?: string;
}>();

const handleClick = () => {
  if (props.onClick) {
    props.onClick(props.image);
  }
};

const imageClasses = computed(() => ({
  'cursor-pointer': !!props.onClick,
  'object-cover': true,
  [`w-[${props.width}]`]: !!props.width,
  [`h-[${props.height}]`]: !!props.height,
}));
</script>

<style scoped></style>
