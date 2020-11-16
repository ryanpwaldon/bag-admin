<template>
  <div class="flex flex-col space-y-6">
    <BaseGridCard :content-padding="false">
      <template #header>
        <h3 class="text-base font-medium text-gray-700">Performance</h3>
      </template>
      <BaseStats
        :stats="[
          { label: 'Income', value: income },
          { label: 'Conversions', value: orders.length }
        ]"
      />
    </BaseGridCard>
    <BaseGridCard :content-padding="false">
      <template #header>
        <h3 class="text-base font-medium text-gray-700">Conversions</h3>
      </template>
      <BaseTable :props="ordersTableProperties" :items="orders" :link="buildLink" :loading="loading" v-if="loading || orders.length">
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
import BaseStats from '@/components/BaseStats/BaseStats.vue'
import orderService from '@/services/api/services/orderService'
import { CrossSell } from '@/services/api/services/crossSellService'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import useFormatter from '@/composables/useFormatter'
import { AdminOrder } from '@/types/admin/types'
import { defineComponent, PropType, ref, watchEffect } from 'vue'
import { ResourceType } from '@shopify/app-bridge/actions/Navigation/Redirect'
import { parseGid } from '@shopify/admin-graphql-api-utilities'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'

export default defineComponent({
  components: {
    BaseStats,
    BaseTable,
    BaseGridCard
  },
  props: {
    crossSell: {
      type: Object as PropType<CrossSell>,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const orders = ref([] as AdminOrder[])
    const fetchOrders = async () => {
      loading.value = true
      orders.value = await orderService.findByIds(props.crossSell.orders)
      loading.value = false
    }
    watchEffect(fetchOrders)
    const { format } = useFormatter()
    return { orders, loading, format }
  },
  data: () => ({
    ordersTableProperties: [
      { name: 'Order', id: 'order' },
      { name: 'Date', id: 'date' },
      { name: 'Total', id: 'total' },
      { name: 'Attribution', id: 'attribution' },
      { name: '', id: 'link' }
    ]
  }),
  methods: {
    buildLink(order: AdminOrder) {
      this.$shopify.redirectToAdminUrl({ name: ResourceType.Order, resource: { id: parseGid(order.id) } })
    },
    extractRelevantLineItemPrice(order: AdminOrder, productId: string) {
      const lineItem = order.lineItems.edges.find(item => item.node.product?.id === productId)?.node
      return this.format.currency(lineItem?.discountedTotalSet.shopMoney.amount, lineItem?.discountedTotalSet.shopMoney.currencyCode)
    }
  },
  computed: {
    income(): string {
      if (!this.orders.length) return '$0'
      const lineItems = this.orders.map(item => item.lineItems.edges.find(item => item.node.product?.id === this.crossSell.productId)?.node)
      const currencyCode = lineItems[0]?.discountedTotalSet.shopMoney.currencyCode
      const income = lineItems.reduce((income, item) => {
        income += parseFloat(item?.discountedTotalSet.shopMoney.amount)
        return income
      }, 0)
      return this.format.currency(income, currencyCode)
    }
  }
})
</script>
