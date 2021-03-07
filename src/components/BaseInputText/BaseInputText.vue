<template>
  <div class="flex flex-col items-start">
    <label :for="name" class="block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
    <div class="relative w-full mt-1">
      <input
        :id="name"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full transition duration-150 ease-in-out rounded shadow-sm sm:text-sm sm:leading-5"
        :class="
          error
            ? 'text-red-900 placeholder-red-300 border-red-300 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        "
      />
      <div v-if="error" class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-sm" :class="[error ? 'text-red-600' : 'text-gray-500']" v-if="error || description">
      {{ error || description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      required: false
    }
  }
})
</script>
