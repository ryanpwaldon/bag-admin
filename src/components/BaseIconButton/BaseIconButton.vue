<template>
  <button
    :class="active ? 'text-gray-700 bg-gray-100' : 'text-gray-400 bg-transparent'"
    class="inline-flex items-center justify-center w-8 h-8 transition duration-150 ease-in-out rounded-full focus:outline-none hover:text-gray-700 hover:bg-gray-100"
  >
    <component :is="icon" class="w-6 h-6" />
  </button>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    icon: {
      type: Object as PropType<Component>
    },
    active: {
      type: Boolean,
      default: false
    }
  }
})
</script>
