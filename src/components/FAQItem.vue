<template>
  <div class="faq-item w-full md:w-1/3">
    <div class="text-12 font-semibold">{{ question }}</div>
    <p class="text-10 mt-1">{{ answer }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  question: string;
  answer: string;
}>();
</script>
