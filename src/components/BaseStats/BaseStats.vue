<template>
  <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
    <div class="overflow-hidden bg-white rounded-lg shadow" v-for="(stat, i) in stats" :key="i">
      <div class="px-4 py-5 sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ stat.label }}
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ stat.value }}
        </dd>
      </div>
    </div>
  </dl>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface Stat {
  label: string
  value: number | string
}

export default defineComponent({
  props: {
    stats: {
      type: Array as PropType<Stat[]>,
      required: true
    }
  }
})
</script>
