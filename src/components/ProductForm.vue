<template>
  <div class="product-form flex-1 ml-5">
    <h1 class="text-52 font-extrabold mb-4 leading-55">
      Chance to win a StockX Mystery Box today!
    </h1>
    <p class="mb-5 text-22">Unleash the Excitement of Mystery Electronics</p>
    <div class="p-6 border border-border-light-gray rounded-20">
      <h2 class="text-32 font-medium mb-6 text-center">Enter details</h2>
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-2 gap-5 mb-5">
          <CustomInput
            v-model="firstName"
            type="text"
            placeholder="First name"
          />
          <CustomInput v-model="lastName" type="text" placeholder="Last name" />
        </div>
        <CustomInput
          v-model="street"
          type="text"
          placeholder="Street"
          additionalClasses="mb-5"
        />
        <div class="grid grid-cols-2 gap-5 mb-5">
          <CustomInput
            v-model="postalCode"
            type="text"
            placeholder="Postal code"
          />
          <CustomInput v-model="city" type="text" placeholder="City" />
        </div>
        <CustomInput
          v-model="phoneNumber"
          type="text"
          placeholder="Phone number"
          additionalClasses="mb-5"
        />
        <CustomInput
          v-model="email"
          type="email"
          placeholder="Email"
          additionalClasses="mb-5"
        />
        <button
          type="submit"
          class="w-full bg-secondary text-white p-2 rounded-10 h-12"
        >
          PROCEED TO PAYMENT
        </button>
        <div class="flex mt-5 gap-1 justify-center">
          <img
            v-for="thumbnail in securityProviders"
            :key="thumbnail.id"
            :src="thumbnail.imgSrc"
            :alt="thumbnail.alt"
            class="w-[84px] h-[40px]"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
import { ImageData } from '../App.vue';

defineProps<{
  securityProviders: ImageData[];
}>();

const firstName = ref('');
const lastName = ref('');
const street = ref('');
const postalCode = ref('');
const city = ref('');
const phoneNumber = ref('');
const email = ref('');

const submitForm = () => {
  // Handle form submission
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    street: street.value,
    postalCode: postalCode.value,
    city: city.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
  });
};
</script>
