<template>
  <div class="flex h-20 col-span-1 bg-white border border-gray-300 rounded-md shadow-sm">
    <div v-if="image" class="flex-shrink-0 w-20 h-full bg-center bg-cover rounded-l-md" :style="{ backgroundImage: `url(${image})` }" />
    <div class="flex items-center justify-between flex-1 min-w-0">
      <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
        <p class="font-medium text-gray-900 truncate">{{ title }}</p>
        <p class="text-gray-500">{{ subtitle }}</p>
      </div>
      <div class="relative flex-shrink-0 mr-2">
        <button
          type="button"
          @click.stop="dropdownIsOpen = !dropdownIsOpen"
          class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition duration-150 ease-in-out bg-transparent rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
        >
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
        <BaseDropdown
          v-model="dropdownIsOpen"
          :links="[
            {
              title: 'Change',
              action: () => $emit('change')
            },
            {
              title: 'Remove',
              action: () => $emit('remove')
            }
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseDropdown from '../BaseDropdown/BaseDropdown.vue'
export default defineComponent({
  name: 'BaseSelectionCard',
  components: {
    BaseDropdown
  },
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  data: () => ({
    dropdownIsOpen: false
  })
})
</script>
