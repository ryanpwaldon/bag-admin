<template>
  <div class="flex items-center justify-center w-screen h-screen text-lg tracking-wider text-gray-500 bg-gray-900">
    <p>Error</p>
    <p>{{ message }}</p>
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
