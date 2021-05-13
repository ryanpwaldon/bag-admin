<template>
  <BaseGridCard :content-padding="false" class="overflow-hidden">
    <template #header>
      <h3 class="text-base font-medium text-gray-800">Conversions</h3>
    </template>
    <BaseTable :loading="loading" :items="items" :handle-selection="handleSelection" :props="properties" v-if="loading || items.length">
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
      <template #pagination>
        <BasePagination :loading="loading" :total="total" v-model:page="page" :pages="pages" :limit="limit" />
      </template>
    </BaseTable>
    <div class="flex flex-col items-center justify-center h-44" v-else>
      <img class="h-10" src="@/assets/img/empty-box.svg" />
      <p class="mt-2 text-sm leading-5 text-gray-500">No conversions found</p>
    </div>
  </BaseGridCard>
</template>

<script lang="ts">
import useFormatter from '@/composables/useFormatter'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import { CrossSell } from '@/services/api/services/crossSellService'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import { ResourceType } from '@shopify/app-bridge/actions/Navigation/Redirect'
import conversionService, { Conversion, ConversionType } from '@/services/api/services/conversionService'
export default defineComponent({
  components: {
    BaseTable,
    BaseGridCard,
    BasePagination
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props) {
    const page = ref(1)
    const limit = ref(10)
    const loading = ref(true)
    const total = ref(null as number | null)
    const pages = ref(null as number | null)
    const items = ref([] as Conversion<CrossSell>[])
    const properties = [
      { name: 'Order', id: 'order' },
      { name: 'Offer income', id: 'income' },
      { name: 'Order total', id: 'total' },
      { name: 'Date', id: 'date' },
      { name: '', id: 'link' }
    ]
    const fetchItems = async () => {
      loading.value = true
      const response = await conversionService.findByOffer({
        offerId: props.crossSell.id,
        conversionType: ConversionType.CrossSell,
        page: page.value,
        limit: limit.value,
        sort: '-createdAt'
      })
      items.value = response.docs
      total.value = response.total
      pages.value = response.pages
      loading.value = false
    }
    watchEffect(fetchItems)
    const { format } = useFormatter()
    return { items, page, limit, properties, total, pages, loading, format }
  },
  methods: {
    handleSelection(conversion: Conversion<CrossSell>) {
      this.$shopify.redirectToAdminUrl({ name: ResourceType.Order, resource: { id: conversion.order.details.id.toString() } })
    }
  }
})
</script>
