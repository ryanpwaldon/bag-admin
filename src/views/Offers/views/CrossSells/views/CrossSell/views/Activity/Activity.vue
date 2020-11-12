<template>
  <div class="flex flex-col space-y-6">
    <BaseStats
      :stats="[
        { label: 'Total income', value: '$29.00' },
        { label: 'Conversions', value: '2' },
        { label: 'Impressions', value: '2093' }
      ]"
    />
    <BaseTable :props="ordersTableProperties" :items="orders">
      <template #order="{ item }">
        <div class="text-sm font-medium leading-5 text-gray-900">{{ item.name }}</div>
      </template>
      <template #date="{ item }">
        <div class="text-sm leading-5 text-gray-500">{{ $dayjs(item.processedAt).format('Do MMM YYYY') }}</div>
      </template>
      <template #total="{ item }">
        <div class="text-sm leading-5 text-gray-500">
          {{ format.currency(item.totalPriceSet.shopMoney.amount, item.totalPriceSet.shopMoney.currencyCode) }}
        </div>
      </template>
      <template #attribution="{ item }">
        <div class="text-sm leading-5 text-gray-500">
          {{ extractRelevantLineItemPrice(item, crossSell.productId) }}
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script lang="ts">
import BaseStats from '@/components/BaseStats/BaseStats.vue'
import orderService from '@/services/api/services/orderService'
import { CrossSell } from '@/services/api/services/crossSellService'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import useFormatter from '@/composables/useFormatter'
import { AdminOrder } from '@/types/admin/types'
import { defineComponent, PropType, ref, watchEffect } from 'vue'

const { format } = useFormatter()

const extractRelevantLineItemPrice = (order: AdminOrder, productId: string) => {
  const lineItem = order.lineItems.edges.find(item => item.node.product?.id === productId)?.node
  return format.currency(lineItem?.discountedTotalSet.shopMoney.amount, lineItem?.discountedTotalSet.shopMoney.currencyCode)
}

const ordersTableProperties = [
  { name: 'Order', id: 'order' },
  { name: 'Date', id: 'date' },
  { name: 'Total', id: 'total' },
  { name: 'Attribution', id: 'attribution' }
]

export default defineComponent({
  components: {
    BaseStats,
    BaseTable
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const orders = ref(null as AdminOrder[] | null)
    const fetchOrders = async () => {
      loading.value = true
      orders.value = await orderService.findByIds(props.crossSell.orders)
      loading.value = false
    }
    watchEffect(fetchOrders)
    return { orders, loading, ordersTableProperties, format, extractRelevantLineItemPrice }
  }
})
</script>
