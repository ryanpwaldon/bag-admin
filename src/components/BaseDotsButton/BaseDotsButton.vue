<template>
  <div class="relative">
    <button
      type="button"
      @click.stop="open = !open"
      class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out bg-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
    >
      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>
    <BaseDropdown v-model:open="open" :links="links" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseDropdown, { Link } from '../BaseDropdown/BaseDropdown.vue'
export default defineComponent({
  components: {
    BaseDropdown
  },
  props: {
    links: {
      type: Array as PropType<Link[]>,
      required: true
    }
  },
  data: () => ({
    open: false
  })
})
</script>
