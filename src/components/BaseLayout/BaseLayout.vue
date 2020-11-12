<template>
  <BaseNav />
  <main class="max-w-4xl px-4 pt-6 pb-32 mx-auto overflow-hidden sm:pt-8 sm:px-6 lg:px-8">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseNav from '@/components/BaseNav/BaseNav.vue'
export default defineComponent({
  components: {
    BaseNav
  }
})
</script>
