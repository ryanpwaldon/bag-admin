<template>
  <nav class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
    <div class="hidden sm:block">
      <p class="text-sm leading-5 text-gray-700">
        Showing
        <span class="font-medium">{{ first }}</span>
        to
        <span class="font-medium">{{ last }}</span>
        of
        <span class="font-medium">{{ total }}</span>
        results
      </p>
    </div>
    <div class="flex justify-between flex-1 sm:justify-end sm:grid sm:gap-3">
      <button
        v-for="button in [
          { name: 'Previous', id: 'previous' },
          { name: 'Next', id: 'next' }
        ]"
        class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
        @click="handlePaginate(button.id)"
        :key="button.id"
      >
        {{ button.name }}
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    page: {
      type: Number,
      required: true
    },
    first: {
      type: Number,
      required: true
    },
    last: {
      type: Number,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  methods: {
    handlePaginate(direction: 'previous' | 'next') {
      this.$emit('paginate', direction === 'previous' ? this.page - 1 : this.page + 1)
    }
  }
})
</script>
