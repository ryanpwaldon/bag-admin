<template>
  <div></div>
  <!-- <BaseStats
    :stats="[
      { label: 'Total Orders', value: ordersOverActivePeriod },
      { label: 'Total Conversions', value: conversions.length },
      { label: 'Conversion Rate', value: conversionRate }
    ]"
  /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFormatter from '@/composables/useFormatter'
export default defineComponent({
  setup() {
    const { format } = useFormatter()
    return { format }
  }
})
</script>
