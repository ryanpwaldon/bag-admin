<template>
  <div class="grid gap-6">
    <ConversionsTable :cross-sell="crossSell" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import ConversionsTable from '@/views/Offers/views/CrossSells/views/CrossSell/views/Activity/components/ConversionsTable/ConversionsTable.vue'
export default defineComponent({
  components: {
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
