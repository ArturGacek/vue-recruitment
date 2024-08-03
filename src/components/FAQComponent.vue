<template>
  <div
    class="faq-container flex flex-col md:flex-row justify-between bg-background-secondary gap-8 py-6 px-5"
  >
    <FAQItem
      v-for="item in faqs"
      :key="item.question"
      :question="item.question"
      :answer="item.answer"
    />
  </div>
</template>

<script setup lang="ts">
import FAQItem from './FAQItem.vue';
import { faqs } from '../constants/index';
</script>
