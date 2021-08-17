<template>
  <div class="flex bg-white divide-x divide-gray-200 rounded shadow">
    <button
      type="button"
      @click="$emit('decrement')"
      :disabled="disableDecrement"
      class="relative inline-flex items-center px-2 py-2 text-sm font-medium outline-none rounded-l-md focus:z-10 focus:outline-none"
      :class="disableDecrement ? 'bg-gray-100 cursor-default text-gray-400' : 'hover:bg-gray-50 bg-white text-gray-500'"
    >
      <ChevronLeftIcon class="w-5 h-5" />
    </button>
    <button
      type="button"
      @click="$emit('increment')"
      :disabled="disableIncrement"
      class="relative inline-flex items-center px-2 py-2 text-sm font-medium outline-none rounded-r-md focus:z-10 focus:outline-none"
      :class="disableIncrement ? 'bg-gray-100 cursor-default text-gray-400' : 'hover:bg-gray-50 bg-white text-gray-500'"
    >
      <ChevronRightIcon class="w-5 h-5" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronLeftIcon } from '@heroicons/vue/solid'
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
  props: {
    disableDecrement: {
      type: Boolean,
      required: false
    },
    disableIncrement: {
      type: Boolean,
      required: false
    }
  }
})
</script>
