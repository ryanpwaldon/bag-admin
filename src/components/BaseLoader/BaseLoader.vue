<template>
  <BaseCard>
    <div class="grid gap-6">
      <div class="grid grid-flow-row gap-2">
        <div class="w-1/4 h-4 bg-gray-100 rounded-full animate-pulse" />
        <div class="w-3/4 h-4 bg-gray-100 rounded-full animate-pulse" />
      </div>
      <div v-for="n in 3" :key="n" class="flex space-x-4">
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
    </div>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseCard from '@/components/BaseCard/BaseCard.vue'
export default defineComponent({
  name: 'BaseSkeletonLoader',
  components: {
    BaseCard
  }
})
</script>
