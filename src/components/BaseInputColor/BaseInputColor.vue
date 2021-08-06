<template>
  <div class="flex flex-col items-start">
    <label :for="name" class="block text-sm font-medium text-gray-800">{{ label }}</label>
    <div class="relative flex w-full rounded shadow-sm" :class="[label && 'mt-1', maxWidth]">
      <div
        class="flex-shrink-0 w-10 text-sm border border-r-0 border-gray-300 rounded-l"
        :style="{ backgroundColor: error ? placeholder : modelValue.toString() }"
      />
      <input
        :id="name"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full text-sm transition duration-150 ease-in-out rounded rounded-l-none"
        :class="[
          error
            ? 'text-red-900 placeholder-red-300 border-red-300 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500',
          center ? 'text-center' : '',
          mono ? 'font-mono' : ''
        ]"
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
    <p
      v-if="error || description"
      class="w-full max-w-2xl mt-2 text-sm"
      :class="[error ? 'text-red-600' : 'text-gray-500', center ? 'text-center' : '']"
    >
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
      required: false
    },
    description: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '#ffffff'
    },
    error: {
      type: String,
      required: false
    },
    mono: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: 'max-w-xs'
    }
  }
})
</script>
