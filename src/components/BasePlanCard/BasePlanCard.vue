<template>
  <div class="flex flex-col items-start p-6 text-left bg-white rounded-md shadow">
    <p class="text-lg font-medium text-gray-900">{{ title }}</p>
    <p class="flex items-baseline mt-2 space-x-1">
      <span class="text-2xl font-medium text-gray-900">${{ price }}</span>
      <span class="text-sm text-gray-500">/ {{ interval }}</span>
    </p>
    <p class="mt-3 text-sm text-gray-500" v-html="description" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    interval: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
})
</script>
