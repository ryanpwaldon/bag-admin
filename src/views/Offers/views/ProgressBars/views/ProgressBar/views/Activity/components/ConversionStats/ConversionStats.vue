<template>
  <BaseStatsLoader v-if="loading" />
  <BaseStats
    v-else
    :stats="[
      { label: 'Total Orders', value: totalOrdersOverActivePeriod },
      { label: 'Total Conversions', value: totalConversions },
      { label: 'Conversion Rate', value: conversionRate }
    ]"
  />
</template>

<script lang="ts">
import useFormatter from '@/composables/useFormatter'
import BaseStats from '@/components/BaseStats/BaseStats.vue'
import orderService from '@/services/api/services/orderService'
import { ProgressBar } from '@/services/api/services/progressBarService'
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue'
import BaseStatsLoader from '@/components/BaseStatsLoader/BaseStatsLoader.vue'
import conversionService, { ConversionType } from '@/services/api/services/conversionService'
export default defineComponent({
  components: { BaseStats, BaseStatsLoader },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const totalConversions = ref(0)
    const { format } = useFormatter()
    const totalOrdersOverActivePeriod = ref(0)
    const conversionRate = computed(() => {
      if (!totalOrdersOverActivePeriod.value || !totalConversions.value) return '–'
      return format.percent(totalConversions.value / totalOrdersOverActivePeriod.value)
    })
    const fetchItems = async () => {
      loading.value = true
      totalOrdersOverActivePeriod.value = await orderService.countByDateRanges(props.progressBar.activeHistory)
      totalConversions.value = await conversionService.getTotalCountByOffer(props.progressBar.id, ConversionType.ProgressBar)
      loading.value = false
    }
    watchEffect(fetchItems)
    return { format, loading, totalOrdersOverActivePeriod, totalConversions, conversionRate }
  }
})
</script>
