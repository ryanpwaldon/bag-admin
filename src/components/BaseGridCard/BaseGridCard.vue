<template>
  <div class="bg-white rounded-lg shadow">
    <div class="px-4 py-5 border-b border-gray-200 rounded-t-lg sm:px-6 sm:py-5 bg-gray-50" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div :class="contentPadding && 'px-4 py-5 sm:p-6'">
      <slot />
    </div>
    <div class="px-4 py-5 mt-2 border-t border-gray-200 rounded-b-lg sm:px-6 sm:py-5 bg-gray-50" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    contentPadding: {
      type: Boolean,
      default: true
    }
  }
})
</script>
