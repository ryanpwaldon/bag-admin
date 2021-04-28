<template>
  <div class="pb-32">
    <BaseNav />
    <main class="max-w-4xl px-4 pt-6 mx-auto sm:pt-8 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
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
