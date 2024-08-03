<template>
  <div
    class="w-[120px] h-[120px] md:w-[160px] md:h-[160px] bg-secondary text-white flex items-center justify-center rounded-50 absolute top-12 right-12 md:top-16 md:right-20 transform translate-x-1/2 -translate-y-1/2"
  >
    <div class="text-center">
      <p class="text-22 md:text-32 font-bold">${{ price }}</p>
      <p class="text-12 md:text-sm">Original value ${{ originalPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  price: number;
  originalPrice: number;
}>();
</script>
