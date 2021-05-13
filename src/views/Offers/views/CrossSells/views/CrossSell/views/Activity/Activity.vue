<template>
  <div class="grid gap-6">
    <ConversionStats :cross-sell="crossSell" />
    <ConversionsTable :cross-sell="crossSell" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import ConversionStats from '@/views/Offers/views/CrossSells/views/CrossSell/views/Activity/components/ConversionStats/ConversionStats.vue'
import ConversionsTable from '@/views/Offers/views/CrossSells/views/CrossSell/views/Activity/components/ConversionsTable/ConversionsTable.vue'
export default defineComponent({
  components: {
    ConversionStats,
    ConversionsTable
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  }
})
</script>
