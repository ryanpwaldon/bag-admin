<template>
  <BaseLoader v-if="loading" />
  <div class="flex flex-col space-y-6" v-else>
    <BaseStats
      :stats="[
        { label: 'Total Orders', value: ordersOverActivePeriod },
        { label: 'Total Conversions', value: conversions.length },
        { label: 'Conversion Rate', value: conversionRate }
      ]"
    />
    <BaseGridCard :content-padding="false">
      <template #header>
        <h3 class="text-base font-medium text-gray-700">Conversions</h3>
      </template>
      <BaseTable :items="conversions" :handle-selection="handleSelection" :props="conversionsTableColumns" v-if="conversions.length">
        <template #order="{ item }">
          <div class="text-sm font-medium text-gray-900">{{ item.order.name }}</div>
        </template>
        <template #total="{ item }">
          <div class="text-sm text-gray-500">{{ format.currency(item.order.total_price) }}</div>
        </template>
        <template #date="{ item }">
          <div class="text-sm text-gray-500">{{ $dayjs(item.order.processed_at).format('Do MMM YYYY') }}</div>
        </template>
        <template #link>
          <div class="self-end text-sm font-medium text-blue-600">Open →</div>
        </template>
      </BaseTable>
      <div class="flex flex-col items-center justify-center h-44" v-else>
        <img class="h-10" src="@/assets/img/empty-box.svg" />
        <p class="mt-2 text-sm text-gray-500">No conversions found</p>
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
import eventService from '@/services/api/services/eventService'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { ProgressBar } from '@/services/api/services/progressBarService'
import { ResourceType } from '@shopify/app-bridge/actions/Navigation/Redirect'
import conversionService, { Conversion } from '@/services/api/services/conversionService'
export default defineComponent({
  components: {
    BaseStats,
    BaseTable,
    BaseLoader,
    BaseGridCard
  },
  props: {
    progressBar: {
      type: Object as PropType<ProgressBar>,
      required: true
    }
  },
  setup() {
    const { format } = useFormatter()
    return { format }
  },
  async created() {
    const [conversions, ordersOverActivePeriod] = await Promise.all([
      conversionService.findByProgressBarId(this.progressBar.id),
      eventService.countOrderCreatedEventsByDateRanges(this.progressBar.activeHistory)
    ])
    this.conversions = conversions
    this.ordersOverActivePeriod = ordersOverActivePeriod
    this.loading = false
  },
  data: () => ({
    loading: true,
    ordersOverActivePeriod: 0,
    conversions: [] as Conversion<ProgressBar>[],
    conversionsTableColumns: [
      { name: 'Order', id: 'order' },
      { name: 'Order total', id: 'total' },
      { name: 'Date', id: 'date' },
      { name: '', id: 'link' }
    ]
  }),
  computed: {
    conversionRate(): string {
      if (!this.ordersOverActivePeriod) return '–'
      return this.format.percent(this.conversions.length / this.ordersOverActivePeriod)
    }
  },
  methods: {
    handleSelection(conversion: Conversion<ProgressBar>) {
      this.$shopify.redirectToAdminUrl({ name: ResourceType.Order, resource: { id: conversion.order.id.toString() } })
    }
  }
})
</script>
