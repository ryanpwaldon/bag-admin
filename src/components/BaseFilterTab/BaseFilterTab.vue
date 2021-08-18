<template>
  <div class="flex items-center px-4 py-2 text-gray-800 bg-white rounded shadow whitespace-nowrap">
    <span class="max-w-xs truncate"><slot /></span>
    <XIcon class="flex-shrink-0 w-4 h-4 ml-2 -mr-1 text-gray-700 cursor-pointer hover:opacity-50" @click="handleClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { XIcon } from '@heroicons/vue/solid'
export default defineComponent({
  components: {
    XIcon
  },
  setup(_, { emit }) {
    const handleClick = () => emit('onRemove')
    return { handleClick }
  }
})
</script>
