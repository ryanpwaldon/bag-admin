<template>
  <nav class="flex space-x-8">
    <div
      :key="i"
      v-for="(tab, i) in tabs"
      :class="
        tab.name === activeTab
          ? 'border-gray-900 text-gray-900'
          : 'text-gray-500 hover:text-gray-700 border-transparent hover:border-gray-300 focus:border-gray-300 focus:text-gray-700'
      "
      class="inline-flex items-center px-1 py-4 text-sm font-medium leading-5 transition duration-150 ease-in-out border-b-2 cursor-pointer select-none group"
      @click="$emit('update:activeTab', tab.name)"
    >
      <component
        :is="tab.icon"
        :class="tab.name === activeTab ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500'"
        class="flex-shrink-0 w-5 h-5 mr-3 -ml-1 transition duration-150 ease-in-out"
      />
      <span>{{ tab.name }}</span>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue'

export interface Tab {
  name: string
  icon: Component
}

export default defineComponent({
  props: {
    activeTab: {
      type: String,
      required: true
    },
    tabs: {
      type: Object as PropType<Tab[]>,
      required: true
    }
  }
})
</script>
