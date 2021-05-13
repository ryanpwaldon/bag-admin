<template>
  <div class="grid gap-6">
    <ConversionsTable :progress-bar="progressBar" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProgressBar } from '@/services/api/services/progressBarService'
import ConversionsTable from './components/ConversionsTable/ConversionsTable.vue'
export default defineComponent({
  components: {
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
