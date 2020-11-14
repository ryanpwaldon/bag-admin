<template>
  <nav class="flex space-x-8">
    <router-link v-for="(link, i) in links" :key="i" v-slot="{ isActive }" :to="{ name: link.name }">
      <span
        :class="
          isActive
            ? 'border-gray-900 text-gray-900'
            : 'text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-300 focus:border-gray-300 focus:text-gray-900'
        "
        class="inline-flex items-center px-1 py-4 text-sm font-medium leading-5 transition duration-150 ease-in-out border-b-2 cursor-pointer select-none group"
      >
        <component
          :is="link.icon"
          :class="isActive ? 'text-gray-800' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500'"
          class="flex-shrink-0 w-5 h-5 mr-2 -ml-1 transition duration-150 ease-in-out"
        />
        <span>{{ link.title }}</span>
      </span>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Component, defineComponent, PropType } from 'vue'

export interface Link {
  title: string
  name: string
  icon: Component
}

export default defineComponent({
  props: {
    links: {
      type: Object as PropType<Link[]>,
      required: true
    }
  }
})
</script>
