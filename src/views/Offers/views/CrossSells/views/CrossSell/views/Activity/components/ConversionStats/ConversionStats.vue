<template>
  <BaseStatsLoader v-if="loading" />
  <BaseStats
    v-else
    :stats="[
      { label: 'Total Conversions', value: totalConversions },
      { label: 'Total Income', value: format.currency(totalIncome) }
    ]"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import useFormatter from '@/composables/useFormatter'
import BaseStats from '@/components/BaseStats/BaseStats.vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import conversionService, { ConversionType } from '@/services/api/services/conversionService'
import BaseStatsLoader from '@/components/BaseStatsLoader/BaseStatsLoader.vue'
export default defineComponent({
  components: { BaseStats, BaseStatsLoader },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const totalIncome = ref(0)
    const totalConversions = ref(0)
    const fetchItems = async () => {
      loading.value = true
      totalIncome.value = await conversionService.getCrossSellIncome(props.crossSell.id)
      totalConversions.value = await conversionService.getTotalCountByOffer(props.crossSell.id, ConversionType.CrossSell)
      loading.value = false
    }
    watchEffect(fetchItems)
    const { format } = useFormatter()
    return { format, loading, totalIncome, totalConversions }
  }
})
</script>
