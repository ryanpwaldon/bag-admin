<template>
  <div class="bg-white rounded-lg shadow">
    <div class="px-4 py-5 sm:p-6" v-if="title" :class="[$slots.default && 'border-gray-200 border-b']">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        {{ title }}
      </h3>
      <p class="max-w-xl mt-1 text-sm leading-5 text-gray-500" v-if="description">
        {{ description }}
      </p>
    </div>
    <div class="px-4 py-5 sm:p-6" v-if="$slots.default">
      <slot />
    </div>
    <div class="flex px-4 py-5 border-t border-gray-200 rounded-b-lg sm:px-6 bg-gray-50" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  }
})
</script>
