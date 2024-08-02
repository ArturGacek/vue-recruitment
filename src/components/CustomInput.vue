<template>
  <div>
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      :class="[
        'border border-border-color rounded-10 h-12 p-2 w-full',
        additionalClasses,
        focusClasses,
        placeholderClasses,
      ]"
      @input="$emit('update:modelValue', inputValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits, computed } from 'vue';

const props = defineProps<{
  modelValue: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  additionalClasses?: string;
  placeholderColor?: 'gray' | 'primary' | 'secondary';
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
});

const focusClasses = computed(() => {
  return 'focus:outline-none focus:border-primary';
});

const placeholderClasses = computed(() => {
  return props.placeholderColor
    ? `placeholder-${props.placeholderColor}`
    : 'placeholder-gray';
});
</script>
