<template>
  <aside>
    <nav class="space-y-1">
      <span
        :key="i"
        v-for="(tab, i) in tabs"
        :class="
          tab.name === activeTab ? 'text-gray-800 bg-white' : 'text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:bg-white hover:bg-white'
        "
        class="flex items-center px-3 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md cursor-pointer select-none group focus:outline-none"
        @click="$emit('update:activeTab', tab.name)"
      >
        <component
          :is="tab.icon"
          :class="tab.name === activeTab ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500'"
          class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 transition duration-150 ease-in-out"
        />
        <span class="truncate">
          {{ tab.name }}
        </span>
      </span>
    </nav>
  </aside>
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
