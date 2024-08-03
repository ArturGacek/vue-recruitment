<template>
  <div class="mt-5">
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="inputValue"
      :class="[
        'border rounded-10 h-12 p-2 w-full',
        additionalClasses,
        focusClasses,
        placeholderClasses,
        error ? 'border-error bg-error-light' : 'border-border-color',
      ]"
      @input="handleInput"
    />
    <p v-if="error" class="text-error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: string;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  additionalClasses?: string;
  placeholderColor?: 'gray' | 'primary' | 'secondary';
  error?: string;
}>();

const emit = defineEmits(['update:modelValue', 'input']);

const inputValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);

const handleInput = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  inputValue.value = newValue;
  emit('update:modelValue', newValue);
  emit('input', newValue);
};

const focusClasses = computed(() => {
  return 'focus:outline-none focus:border-primary';
});

const placeholderClasses = computed(() => {
  return props.placeholderColor
    ? `placeholder-${props.placeholderColor}`
    : 'placeholder-gray';
});
</script>
