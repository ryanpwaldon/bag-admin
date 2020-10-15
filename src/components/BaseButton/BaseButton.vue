<template>
  <span class="inline-flex rounded-md shadow-sm" :class="[(loading || disabled) && 'cursor-not-allowed pointer-events-none']">
    <button
      :type="type"
      :class="[sizeClasses, themeClasses, $slots.icon ? 'justify-between' : 'justify-center', disabled && 'opacity-50']"
      class="inline-flex items-center w-full transition duration-150 ease-in-out border focus:outline-none"
    >
      <BaseSpinner v-if="loading" class="w-4 h-4 mr-1 -ml-1" />
      {{ loading ? 'Loading' : text }}
      <slot name="icon" v-if="!loading" />
    </button>
  </span>
</template>

<script lang="ts">
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseSpinner
  },
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String,
      default: 'md'
    },
    theme: {
      type: String,
      default: 'blue'
    },
    loading: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    sizeClasses(): string {
      return ({
        xs: 'rounded px-2.5 py-1.5 text-xs font-medium leading-4',
        sm: 'rounded-md px-3 py-2 text-sm font-medium leading-4',
        md: 'rounded-md px-4 py-2 text-sm font-medium leading-5',
        lg: 'rounded-md px-4 py-2 text-base font-medium leading-6',
        xl: 'rounded-md px-6 py-3 text-base font-medium leading-6'
      } as { [key: string]: string })[this.size]
    },
    themeClasses(): string {
      return ({
        indigo:
          'text-white bg-indigo-600 border-transparent hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700',
        blue: 'text-white bg-blue-600 border-transparent hover:bg-blue-500 focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700',
        white:
          'text-gray-700 bg-white border-gray-300 hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50',
        naked: 'text-gray-700 hover:text-gray-500 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50',
        red: 'text-white bg-red-600 border-transparent hover:bg-red-500 focus:border-red-700 focus:shadow-outline-red'
      } as { [key: string]: string })[this.theme]
    }
  }
})
</script>
