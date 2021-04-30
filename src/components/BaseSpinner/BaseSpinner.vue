<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" class="animate-spin">
      <g stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
        <path stroke="currentColor" :class="primaryColor" d="M14 2a12 12 0 1012 12" />
        <path stroke="currentColor" :class="secondaryColor" d="M14 2a12 12 0 0112 12" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    primaryColor: {
      type: String,
      default: 'text-gray-300'
    },
    secondaryColor: {
      type: String,
      default: 'text-gray-800'
    }
  }
})
</script>
