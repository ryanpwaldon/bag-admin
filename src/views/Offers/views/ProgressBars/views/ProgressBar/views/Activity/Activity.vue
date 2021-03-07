<template>
  <BaseLoader v-if="loading" />
  <div class="flex flex-col space-y-6" v-else>
    <BaseGridCard :content-padding="false">
      <template #header>
        <h3 class="text-base font-medium text-gray-700">Performance</h3>
      </template>
      <BaseStats :stats="[{ label: 'Conversions', value: conversions.length }]" />
    </BaseGridCard>
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
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import { ResourceType } from '@shopify/app-bridge/actions/Navigation/Redirect'
import conversionService, { Conversion } from '@/services/api/services/conversionService'
import { ProgressBar } from '@/services/api/services/progressBarService'
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
    this.conversions = await conversionService.findByProgressBarId(this.progressBar.id)
    this.loading = false
  },
  data: () => ({
    loading: true,
    conversions: [] as Conversion<ProgressBar>[],
    conversionsTableColumns: [
      { name: 'Order', id: 'order' },
      { name: 'Order total', id: 'total' },
      { name: 'Date', id: 'date' },
      { name: '', id: 'link' }
    ]
  }),
  methods: {
    handleSelection(conversion: Conversion<ProgressBar>) {
      this.$shopify.redirectToAdminUrl({ name: ResourceType.Order, resource: { id: conversion.order.id.toString() } })
    }
  }
})
</script>
