<template>
  <img
    :src="image.imgSrc"
    :alt="image.alt"
    :class="imageClasses"
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
}>();

const handleClick = () => {
  if (props.onClick) {
    props.onClick(props.image);
  }
};

const imageClasses = computed(() => ({
  'cursor-pointer': !!props.onClick,
  'object-cover': true,
  //   'w-auto': !props.width,
  //   'h-auto': !props.height,
  [`w-[${props.width}]`]: true,
  [`h-[${props.height}]`]: true,
}));
</script>

<style scoped></style>
