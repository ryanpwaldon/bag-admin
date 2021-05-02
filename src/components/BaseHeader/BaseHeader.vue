<template>
  <header class="mb-6 sm:mb-8">
    <BaseBreadcrumbs class="mb-2" />
    <div class="flex items-center justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-semibold leading-7 text-gray-800 sm:truncate">
          {{ $route.meta.title }}
        </h2>
        <p class="max-w-md mt-1 text-sm text-gray-500 " v-if="description">{{ description }}</p>
      </div>
      <div v-if="$slots.actions" class="flex flex-shrink-0 ml-4">
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
  },
  props: {
    description: {
      type: String,
      required: false
    }
  }
})
</script>
