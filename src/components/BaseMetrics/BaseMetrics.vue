<template>
  <div class="flex flex-wrap space-x-8">
    <template v-for="(metric, i) of metrics" :key="i">
      <div class="grid gap-1">
        <span class="text-xs font-semibold tracking-wide text-gray-500 uppercase whitespace-nowrap">{{ metric.label }}</span>
        <span class="text-2xl font-bold text-gray-800">{{ metric.format === 'currency' ? $formatCurrency(metric.value) : metric.value }}</span>
      </div>
      <div class="w-px bg-gray-300" v-if="i !== metrics.length - 1" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

export default defineComponent({
  props: {
    metrics: {
      type: Array as PropType<Record<string, any>[]>,
      required: true
    }
  }
})
</script>
