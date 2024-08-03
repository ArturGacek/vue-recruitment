<template>
  <Wrapper>
    <div class="flex flex-col lg:flex-row gap-5 items-center p-5">
      <ProductGallery
        :mainImage="mainProductImage"
        :thumbnails="thumbnailImages"
      />
      <ProductForm :securityProviders="securityProviders" />
    </div>
    <div class="p-5">
      <h1 class="text-center text-48 font-bold">
        Top Tech Mystery Box at Unbeatable Prices
      </h1>
      <p class="text-center font-medium text-20 mb-8 text-secondary">
        Fast shipping | Easy returns | Special discounts for students
      </p>
      <div v-if="loading">Loading...</div>
      <ImageParagraph
        v-else
        v-for="(data, index) in componentsData"
        :key="index"
        :image="data.image"
        :mobilePosition="data.mobilePosition"
        :desktopPosition="data.desktopPosition"
        :content="data.content"
      >
        <template #title>
          {{ data.titleStart }}
          <span class="text-secondary">{{ data.highlight }}</span>
          {{ data.titleEnd }}
        </template>
      </ImageParagraph>
    </div>
    <FAQ />
    <Footer :image="footerImage" />
  </Wrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Wrapper from './components/WrapperComponent.vue';
import ProductGallery from './components/ProductGallery.vue';
import ProductForm from './components/ProductForm.vue';
import ImageParagraph from './components/ImageParagraph.vue';
import FAQ from './components/FAQComponent.vue';
import Footer from './components/FooterComponent.vue';

import { ArticleData } from './interfaces/ArticleData';
import {
  mainProductImage,
  thumbnailImages,
  securityProviders,
  footerImage,
} from './constants/index';

const componentsData = ref<ArticleData[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const response = await axios.get<ArticleData[]>(
      '/data/componentsData.json'
    );

    componentsData.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
});
</script>
