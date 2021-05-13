<template>
  <div class="grid gap-6">
    <ConversionStats :progress-bar="progressBar" />
    <ConversionsTable :progress-bar="progressBar" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProgressBar } from '@/services/api/services/progressBarService'
import ConversionStats from './components/ConversionStats/ConversionStats.vue'
import ConversionsTable from './components/ConversionsTable/ConversionsTable.vue'
export default defineComponent({
  components: {
    ConversionStats,
    ConversionsTable
  },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  }
})
</script>
