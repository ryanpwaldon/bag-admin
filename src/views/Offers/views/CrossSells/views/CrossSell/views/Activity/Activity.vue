<template>
  <BaseLoader v-if="loading" />
  <div class="flex flex-col space-y-6" v-else>
    <BaseStats
      :stats="[
        { label: 'Total Conversions', value: conversions.length },
        { label: 'Total Income', value: format.currency(totalConversionIncome) }
      ]"
    />
    <BaseGridCard :content-padding="false">
      <template #header>
        <h3 class="text-base font-medium text-gray-700">Conversions</h3>
      </template>
      <BaseTable :items="conversions" :handle-selection="handleSelection" :props="conversionsTableColumns" v-if="conversions.length">
        <template #order="{ item }">
          <div class="text-sm font-medium leading-5 text-gray-900">{{ item.order.details.name }}</div>
        </template>
        <template #date="{ item }">
          <div class="text-sm leading-5 text-gray-500">{{ $dayjs(item.order.details.processed_at).format('Do MMM YYYY') }}</div>
        </template>
        <template #income="{ item }">
          <div class="text-sm leading-5 text-gray-500">
            {{ format.currency(item.value) }}
          </div>
        </template>
        <template #total="{ item }">
          <div class="text-sm leading-5 text-gray-500">
            {{ format.currency(item.order.details.total_price) }}
          </div>
        </template>
        <template #link>
          <div class="self-end text-sm font-medium leading-5 text-blue-600">Open →</div>
        </template>
      </BaseTable>
      <div class="flex flex-col items-center justify-center h-44" v-else>
        <img class="h-10" src="@/assets/img/empty-box.svg" />
        <p class="mt-2 text-sm leading-5 text-gray-500">No conversions found</p>
      </div>
    </BaseGridCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import useFormatter from '@/composables/useFormatter'
import BaseStats from '@/components/BaseStats/BaseStats.vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { ResourceType } from '@shopify/app-bridge/actions/Navigation/Redirect'
import conversionService, { Conversion } from '@/services/api/services/conversionService'
export default defineComponent({
  components: {
    BaseStats,
    BaseTable,
    BaseGridCard,
    BaseLoader
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup() {
    const { format } = useFormatter()
    return { format }
  },
  async created() {
    this.conversions = await conversionService.findByCrossSellId(this.crossSell.id)
    this.loading = false
  },
  data: () => ({
    loading: true,
    conversions: [] as Conversion<CrossSell>[],
    conversionsTableColumns: [
      { name: 'Order', id: 'order' },
      { name: 'Offer income', id: 'income' },
      { name: 'Order total', id: 'total' },
      { name: 'Date', id: 'date' },
      { name: '', id: 'link' }
    ]
  }),
  computed: {
    totalConversionIncome(): number {
      return this.conversions.reduce((total, { value }) => total + value, 0)
    }
  },
  methods: {
    handleSelection(conversion: Conversion<CrossSell>) {
      this.$shopify.redirectToAdminUrl({ name: ResourceType.Order, resource: { id: conversion.order.details.id.toString() } })
    }
  }
})
</script>
