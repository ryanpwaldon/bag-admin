<template>
  <span class="inline-flex rounded-md shadow-sm">
    <button
      :type="type"
      class="inline-flex items-center justify-between w-full px-3 py-2 text-sm font-medium leading-5 text-gray-800 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md focus:outline-none hover:bg-gray-50 focus:ring-2 ring-offset-2 ring-offset ring-blue-500 active:text-gray-800 active:bg-gray-50"
    >
      {{ text }}
      <slot name="icon" />
    </button>
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
    type: {
      type: String,
      default: 'button'
    }
  }
})
</script>
