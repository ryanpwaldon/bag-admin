<template>
  <div class="grid gap-6">
    <BaseStats
      :stats="[
        { label: 'Total income', value: '$29.00' },
        { label: 'Conversions', value: '2' },
        { label: 'Impressions', value: '2093' }
      ]"
    />
  </div>
</template>

<script lang="ts">
import BaseStats from '@/components/BaseStats/BaseStats.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseStats
  }
})
</script>
