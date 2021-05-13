<template>
  <div></div>
  <!-- <BaseStats
    :stats="[
      { label: 'Total Conversions', value: conversions.length },
      { label: 'Total Income', value: format.currency(totalConversionIncome) }
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
