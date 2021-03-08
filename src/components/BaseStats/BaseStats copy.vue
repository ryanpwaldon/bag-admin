<template>
  <div class="flex flex-col overflow-hidden divide-x-0 divide-y divide-gray-200 sm:flex-row sm:divide-x sm:divide-y-0">
    <div class="flex-1 px-4 py-5 sm:p-6" v-for="(stat, i) in stats" :key="i">
      <dl>
        <dt class="text-xs font-medium leading-4 tracking-wider text-gray-500 uppercase truncate">
          {{ stat.label }}
        </dt>
        <dd class="mt-1 text-2xl font-semibold leading-8 text-gray-900">
          {{ stat.value }}
        </dd>
      </dl>
    </div>
  </div>
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
