<template>
  <div class="flex h-20 col-span-1 bg-white border border-gray-300 rounded-md shadow-sm">
    <div
      class="flex-shrink-0 w-20 h-full bg-gray-100 bg-center bg-cover rounded-l-md"
      :style="{ backgroundImage: `url(${image})` }"
      :class="[loading && 'animate-pulse']"
    />
    <div class="flex items-center justify-between flex-1 min-w-0">
      <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
        <template v-if="loading">
          <div class="w-1/3 h-4 mb-3 bg-gray-100 rounded-full animate-pulse" />
          <div class="w-3/4 h-4 bg-gray-100 rounded-full animate-pulse" />
        </template>
        <template v-else>
          <p class="font-medium text-gray-900 truncate">{{ title }}</p>
          <p class="text-gray-500">{{ type }}</p>
        </template>
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      default: '–'
    },
    type: {
      type: String,
      required: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
})
</script>
