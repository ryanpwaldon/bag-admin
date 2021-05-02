<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <div v-show="open" class="absolute right-0 z-10 w-48 mt-2 origin-top-right rounded-md shadow-lg">
      <div class="py-1 bg-white rounded-md ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
        <component
          :is="link.path ? 'router-link' : 'button'"
          class="inline-block w-full px-4 py-2 text-sm text-left text-gray-800 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          v-for="(link, i) in links"
          v-bind="link.path ? { to: link.path } : { role: 'menuitem', type: 'button' }"
          v-on="link.path ? {} : { click: link.action }"
          :key="i"
        >
          {{ link.title }}
        </component>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface Link {
  title: string
  path: string
  action: Function
}

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      required: false
    },
    links: {
      type: Array as PropType<Link[]>,
      required: true
    }
  },
  watch: {
    open(open) {
      const action = () => this.$emit('update:open', false)
      if (open) window.addEventListener('click', action, { once: true })
      else window.removeEventListener('click', action)
    }
  }
})
</script>
