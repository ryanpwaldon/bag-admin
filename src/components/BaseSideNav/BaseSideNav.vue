<template>
  <aside>
    <nav class="space-y-1">
      <router-link :key="i" v-slot="{ isActive }" v-for="(link, i) in links" :to="{ name: link.name }" class="block">
        <span
          :class="isActive ? 'text-blue-700 bg-gray-50' : 'text-gray-800 hover:text-gray-800 focus:text-gray-800 focus:bg-gray-50 hover:bg-gray-50'"
          class="flex items-center px-3 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out rounded-md group focus:outline-none"
        >
          <component
            :is="link.icon"
            :class="isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500'"
            class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 transition duration-150 ease-in-out"
          />
          <span class="truncate">
            {{ link.title }}
          </span>
        </span>
      </router-link>
    </nav>
  </aside>
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
