<template>
  <div class="flex items-center justify-center w-screen h-screen text-lg tracking-wider text-gray-700 uppercase">
    <p class="px-4 border-r border-gray-700">Error</p>
    <p class="px-4">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    message: {
      type: String,
      required: true
    }
  }
})
</script>
