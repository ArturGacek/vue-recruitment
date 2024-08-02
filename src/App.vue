<template>
  <Wrapper>
    <div class="flex container gap-5 items-center p-5">
      <ProductGallery :mainImage="mainImage" :thumbnails="thumbnails" />
      <ProductForm :securityProviders="securityProviders" />
    </div>
    <div class="p-5 container mx-auto">
      <h1 class="text-center text-48 font-bold">
        Top Tech Mystery Box at Unbeatable Prices
      </h1>
      <p class="text-center font-medium text-20 mb-8 text-secondary">
        Fast shipping | Easy returns | Special discounts for students
      </p>
      <ImageParagraph
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
    <Footer />
  </Wrapper>
</template>

<script setup lang="ts">
import Wrapper from './components/Wrapper.vue';
import ProductGallery from './components/ProductGallery.vue';
import ProductForm from './components/ProductForm.vue';
import ImageParagraph from './components/ImageParagraph.vue';
import FAQ from './components/FAQ.vue';
import Footer from './components/Footer.vue';

export interface ImageData {
  imgSrc: string;
  alt: string;
  id: string;
}

interface ArticleData {
  titleStart: string;
  highlight: string;
  titleEnd: string;
  content: string;
  image: ImageData;
  mobilePosition: 'top' | 'bottom';
  desktopPosition: 'left' | 'right';
}

const mainImage: ImageData = {
  id: '1',
  imgSrc: '/src/assets/gallery-1.svg',
  alt: 'Main Product Image',
};

const thumbnails: ImageData[] = [
  { id: '2', imgSrc: '/src/assets/gallery-2.svg', alt: 'Thumbnail 1' },
  { id: '3', imgSrc: '/src/assets/gallery-3.svg', alt: 'Thumbnail 2' },
  { id: '4', imgSrc: '/src/assets/gallery-4.svg', alt: 'Thumbnail 3' },
];
const securityProviders: ImageData[] = [
  { id: '44', imgSrc: '/src/assets/icon-1.svg', alt: 'McAfee Secure' },
  { id: '45', imgSrc: '/src/assets/icon-2.svg', alt: 'TRUSTe' },
  { id: '46', imgSrc: '/src/assets/icon-3.svg', alt: '256 BIT' },
];

const componentsData: ArticleData[] = [
  {
    image: {
      imgSrc: '/src/assets/picture-1.svg',
      alt: 'Mystery Box Image 1',
      id: '22',
    },
    titleStart: 'Curious about the',
    highlight: 'StockX',
    titleEnd: 'Mystery Box?',
    content: `Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality electronics, handpicked to elevate your tech game.
              <br/><br/>
              Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech surprises every time.`,
    mobilePosition: 'top',
    desktopPosition: 'left',
  },
  {
    image: {
      imgSrc: '/src/assets/picture-2.svg',
      alt: 'Mystery Box Image 2',
      id: '33',
    },
    titleStart: 'Why is everyone buzzing about these boxes?',
    highlight: '',
    titleEnd: '',
    content: `StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics at a fraction of the cost.
              <br/><br/>
              Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!`,
    mobilePosition: 'bottom',
    desktopPosition: 'right',
  },
];
</script>
