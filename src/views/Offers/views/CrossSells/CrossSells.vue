<template>
  <BaseTable
    :loading="loading"
    :props="props"
    :items="items"
    :link="item => ({ name: 'cross-sell', params: { id: item.id } })"
    class="overflow-hidden bg-white rounded-lg shadow"
    v-if="loading || items.length"
  >
    <template #product="{ item }">
      <div class="text-sm font-medium leading-5 text-gray-900">{{ item.product.title }}</div>
    </template>
    <template #title="{ item }">
      <div class="text-sm leading-5 text-gray-500">{{ item.title }}</div>
    </template>
    <template #status="{ item }">
      <div class="text-sm leading-5 text-gray-500">{{ item.active ? 'Live' : 'Paused' }}</div>
    </template>
    <template #link>
      <div class="self-end text-sm font-medium leading-5 text-blue-600">View →</div>
    </template>
    <template #pagination>
      <BasePagination :loading="loading" :total="total" v-model:page="page" :pages="pages" :limit="limit" />
    </template>
  </BaseTable>
  <BaseGridCard v-else>
    <div class="flex flex-col items-center justify-center h-44">
      <img class="h-10" src="@/assets/img/empty-box.svg" />
      <p class="mt-2 text-base font-medium leading-6 text-gray-700">You have not created any cross sells</p>
      <BaseButton class="mt-3" text="Create a cross sell" />
    </div>
  </BaseGridCard>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseTable,
    BasePagination,
    BaseGridCard,
    BaseButton
  },
  setup() {
    const page = ref(1)
    const limit = ref(10)
    const loading = ref(true)
    const total = ref(null as number | null)
    const pages = ref(null as number | null)
    const items = ref([] as CrossSell[])
    const props = [
      { name: 'Product', id: 'product' },
      { name: 'Title', id: 'title' },
      { name: 'Status', id: 'status' },
      { name: '', id: 'link' }
    ]
    const fetchItems = async () => {
      loading.value = true
      const response = await crossSellService.findAll({ page: page.value, limit: limit.value })
      items.value = response.docs
      total.value = response.total
      pages.value = response.pages
      loading.value = false
    }
    watchEffect(fetchItems)
    return { items, page, limit, props, total, pages, loading }
  }
})
</script>
