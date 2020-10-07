<template>
  <span class="inline-flex rounded-md shadow-sm" :class="[full && 'w-full']">
    <button
      :type="type"
      class="inline-flex items-center justify-center transition duration-150 ease-in-out border"
      :class="[sizeClasses, themeClasses, full && 'w-full']"
    >
      {{ text }}
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseButton',
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
    full: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {
      sizeClasses: ({
        xs: 'rounded px-2.5 py-1.5 text-xs font-medium leading-4',
        sm: 'rounded-md px-3 py-2 text-sm font-medium leading-4',
        md: 'rounded-md px-4 py-2 text-sm font-medium leading-5',
        lg: 'rounded-md px-4 py-2 text-base font-medium leading-6',
        xl: 'rounded-md px-6 py-3 text-base font-medium leading-6'
      } as { [key: string]: string })[props.size],
      themeClasses: ({
        indigo:
          'text-white bg-indigo-600 border-transparent hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700',
        blue:
          'text-white bg-blue-600 border-transparent hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700',
        white:
          'text-gray-700 bg-white border-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50',
        naked:
          'text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50'
      } as { [key: string]: string })[props.theme]
    }
  }
})
</script>
