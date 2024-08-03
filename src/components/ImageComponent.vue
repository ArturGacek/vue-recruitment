<template>
  <div :class="wrapperClasses">
    <img
      :src="image.imgSrc"
      :alt="image.alt"
      :class="[imageClasses, additionalClasses]"
      @click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { ImageData } from '../interfaces/ImageData';

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
  'w-full': true,
  'h-full': true,
}));

const wrapperClasses = computed(() => {
  return {
    [props.width ?? 'w-auto']: true,
    [props.height ?? 'h-auto']: true,
  };
});
</script>
