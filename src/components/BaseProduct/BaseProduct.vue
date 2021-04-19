<template>
  <div class="flex text-sm border border-gray-300 rounded-md shadow-sm">
    <template v-if="!loading">
      <div class="flex-shrink-0 w-20 h-20 bg-center bg-cover rounded-l-md" :style="{ backgroundImage: `url(${image})` }" />
      <div class="flex items-center w-full px-3 py-2">
        <div class="flex items-center w-full space-x-5">
          <div class="flex flex-col justify-center flex-1 w-full">
            <p class="font-medium text-gray-700">{{ title }}</p>
            <!-- <p class="text-gray-500" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
              <span>Color: Gray</span>
              <span> · </span>
              <span>Size: 10</span>
            </p> -->
          </div>
          <slot name="button" />
        </div>
      </div>
    </template>
    <div class="flex items-center w-full p-2 pr-4 space-x-4 animate-pulse" v-else>
      <div class="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-md" />
      <div class="flex flex-col flex-1 space-y-2">
        <div class="w-7/12 h-4 bg-gray-100 rounded-md" />
        <div class="w-4/12 h-4 bg-gray-100 rounded-md" />
      </div>
      <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full" />
    </div>
  </div>
</template>

<script lang="ts">
import useFormatter from '@/composables/useFormatter'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    loading: {
      type: Boolean,
      required: false
    }
  },
  setup() {
    const { format } = useFormatter()
    return { format }
  }
})
</script>
