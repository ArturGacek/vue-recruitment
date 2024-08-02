<template>
  <div
    class="w-[160px] h-[160px] bg-secondary text-white flex items-center justify-center rounded-50 absolute top-16 right-20 transform translate-x-1/2 -translate-y-1/2"
  >
    <div class="text-center">
      <p class="text-32 font-bold">${{ price }}</p>
      <p class="text-sm">Original value ${{ originalPrice }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  price: number;
  originalPrice: number;
}>();
</script>
