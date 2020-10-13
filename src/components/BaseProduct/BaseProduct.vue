<template>
  <div class="flex h-20 col-span-1 bg-white border border-gray-300 rounded-md shadow-sm">
    <div v-if="image" class="flex-shrink-0 w-20 h-full bg-center bg-cover rounded-l-md" :style="{ backgroundImage: `url(${image})` }" />
    <div class="flex items-center justify-between flex-1 min-w-0">
      <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
        <p class="font-medium text-gray-900 truncate">{{ title }}</p>
        <p class="text-gray-500">{{ subtitle }}</p>
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseSelectionCard',
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  }
})
</script>
