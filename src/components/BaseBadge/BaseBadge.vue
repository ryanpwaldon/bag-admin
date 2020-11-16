<template>
  <span class="inline-flex items-center" :class="[shapeClasses, themeClasses]">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    shape: {
      type: String,
      default: 'sm-rounded'
    },
    theme: {
      type: String,
      default: 'gray'
    }
  },
  computed: {
    shapeClasses(): string {
      return ({
        'sm-basic': 'px-2.5 py-0.5 rounded-full text-xs font-medium leading-4',
        'lg-basic': 'px-3 py-0.5 rounded-full text-sm font-medium leading-5',
        'sm-rounded': 'px-2 py-0.5 rounded text-xs font-medium leading-4',
        'lg-rounded': 'px-2.5 py-0.5 rounded-md text-sm font-medium leading-5'
      } as { [key: string]: string })[this.shape]
    },
    themeClasses(): string {
      return ({
        lightGray: 'bg-gray-100 text-gray-500',
        gray: 'bg-gray-100 text-gray-800',
        red: 'bg-red-100 text-red-800',
        orange: 'bg-orange-100 text-orange-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        green: 'bg-green-100 text-green-800',
        teal: 'bg-teal-100 text-teal-800',
        blue: 'bg-blue-100 text-blue-800',
        indigo: 'bg-indigo-100 text-indigo-800',
        purple: 'bg-purple-100 text-purple-800',
        pink: 'bg-pink-100 text-pink-800'
      } as { [key: string]: string })[this.theme]
    }
  }
})
</script>
