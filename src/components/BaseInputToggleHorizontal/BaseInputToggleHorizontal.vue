<template>
  <div class="flex items-center justify-between">
    <span class="flex flex-col flex-grow" id="toggleLabel">
      <span class="text-sm font-medium text-gray-800">{{ label }}</span>
      <span class="max-w-xl mt-1 text-sm text-gray-500">{{ description }}</span>
    </span>
    <span
      role="checkbox"
      tabindex="0"
      :aria-checked="modelValue"
      aria-labelledby="toggleLabel"
      :class="modelValue ? 'bg-blue-600' : 'bg-gray-200'"
      class="relative inline-flex flex-shrink-0 h-6 transition duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span
        aria-hidden="true"
        :class="modelValue ? 'translate-x-5' : 'translate-x-0'"
        class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow"
      ></span>
    </span>
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
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  }
})
</script>
