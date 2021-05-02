<template>
  <div class="px-4 py-5 bg-white rounded-lg shadow sm:p-6 sm:flex sm:space-x-6 sm:items-center sm:justify-between">
    <div class="flex w-full space-x-4" v-if="loading">
      <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded animate-pulse" />
      <div class="grid w-full gap-2">
        <div class="w-2/4 h-4 bg-gray-100 rounded-full animate-pulse" />
        <div class="w-full h-4 bg-gray-100 rounded-full animate-pulse" />
      </div>
      <div class="grid w-full gap-2 justify-items-end">
        <div class="w-1/4 h-4 bg-gray-100 rounded-full animate-pulse" />
        <div class="w-1/3 h-4 bg-gray-100 rounded-full animate-pulse" />
      </div>
    </div>
    <template v-else>
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-800">
          {{ title }}
        </h3>
        <p class="max-w-xl mt-1 text-sm leading-5 text-gray-500">
          {{ description }}
        </p>
      </div>
      <div class="mt-4 sm:flex-shrink-0 sm:mt-0">
        <transition
          mode="out-in"
          enter-active-class="transition duration-100 ease-in-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition duration-150 ease-in-out"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <BaseCheckmark v-if="complete" />
          <slot v-else />
        </transition>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import BaseCheckmark from '@/components/BaseCheckmark/BaseCheckmark.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseCheckmark
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    complete: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
})
</script>
