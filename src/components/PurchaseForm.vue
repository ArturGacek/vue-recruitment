<template>
  <div class="product-form flex-1 ml-5">
    <h1 class="text-52 font-extrabold mb-4 leading-55">
      Chance to win a StockX Mystery Box today!
    </h1>
    <p class="mb-5 text-22">Unleash the Excitement of Mystery Electronics</p>
    <div class="p-6 border border-border-light-gray rounded-20">
      <h2 class="text-32 font-medium text-center">Enter details</h2>
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-2 gap-5 mb-5">
          <CustomInput
            v-model="firstName"
            type="text"
            placeholder="First name"
            :error="errors.firstName"
            @input="clearError('firstName')"
          />
          <CustomInput
            v-model="lastName"
            type="text"
            placeholder="Last name"
            :error="errors.lastName"
            @input="clearError('lastName')"
          />
        </div>
        <CustomInput
          v-model="street"
          type="text"
          placeholder="Street"
          :error="errors.street"
          @input="clearError('street')"
        />
        <div class="grid grid-cols-2 gap-5">
          <CustomInput
            v-model="postalCode"
            type="text"
            placeholder="Postal code"
            :error="errors.postalCode"
            @input="clearError('postalCode')"
          />
          <CustomInput
            v-model="city"
            type="text"
            placeholder="City"
            :error="errors.city"
            @input="clearError('city')"
          />
        </div>
        <CustomInput
          v-model="phoneNumber"
          type="text"
          placeholder="Phone number"
          :error="errors.phoneNumber"
          @input="clearError('phoneNumber')"
        />
        <CustomInput
          v-model="email"
          type="text"
          placeholder="Email"
          :error="errors.email"
          @input="clearError('email')"
        />
        <button
          type="submit"
          :disabled="!isFormValid"
          :class="[
            'w-full mt-5 p-2 rounded-10 h-12 bg-secondary text-white cursor-pointer',
            isFormValid ? '' : 'cursor-not-allowed opacity-30',
          ]"
        >
          PROCEED TO PAYMENT
        </button>
        <div class="flex mt-5 gap-1 justify-center">
          <ImageComponent
            v-for="thumbnail in securityProviders"
            :key="thumbnail.id"
            :image="thumbnail"
            width="94px"
            height="40px"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from 'vue';
import CustomInput from './CustomInput.vue';
import { ImageData } from '../interfaces/ImageData';
import ImageComponent from './ImageComponent.vue';

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

const errors = ref({
  firstName: '',
  lastName: '',
  street: '',
  postalCode: '',
  city: '',
  phoneNumber: '',
  email: '',
}) as Ref<{ [key: string]: string }>;

const clearError = (field: string) => {
  errors.value[field] = '';
};

const validateForm = () => {
  let valid = true;

  if (!firstName.value || firstName.value.length < 3) {
    errors.value.firstName = 'Must be at least 3 characters long';
    valid = false;
  }

  if (!lastName.value || lastName.value.length < 3) {
    errors.value.lastName = 'Must be at least 3 characters long';
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errors.value.email = 'Invalid email address';
    valid = false;
  }
  return valid;
};

const isFormValid = computed(() => {
  return (
    firstName.value &&
    lastName.value &&
    street.value &&
    postalCode.value &&
    city.value &&
    phoneNumber.value &&
    email.value &&
    !Object.values(errors.value).some((error) => error)
  );
});

const submitForm = () => {
  if (validateForm()) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      street: street.value,
      postalCode: postalCode.value,
      city: city.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
    });
    firstName.value = '';
    lastName.value = '';
    street.value = '';
    postalCode.value = '';
    city.value = '';
    phoneNumber.value = '';
    email.value = '';
  }
};
</script>
