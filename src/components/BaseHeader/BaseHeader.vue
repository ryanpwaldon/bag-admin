<template>
  <header class="mb-8">
    <BaseBreadcrumbs class="mb-2" />
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-semibold leading-7 text-gray-900 sm:truncate">
          {{ $route.meta.title }}
        </h2>
      </div>
      <div v-if="$slots.actions" class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs/BaseBreadcrumbs.vue'
export default defineComponent({
  components: {
    BaseBreadcrumbs
  }
})
</script>
