<template>
  <BaseTable :props="props" :items="items" :link="item => ({ name: 'cross-sell', params: { id: item.id } })">
    <template #name="{ item }">
      <div class="text-sm font-medium leading-5 text-gray-900">{{ item.product.title }}</div>
    </template>
    <template #title="{ item }">
      <div class="text-sm leading-5 text-gray-500">{{ item.title }}</div>
    </template>
    <template #status="{ item }">
      <div class="text-sm leading-5 text-gray-500">{{ item.active ? 'Live' : 'Paused' }}</div>
    </template>
    <template #link>
      <div class="self-end text-sm font-medium leading-5 text-blue-600">→</div>
    </template>
    <template #pagination>
      <BasePagination :loading="loading" :total="total" v-model:page="page" :pages="pages" :limit="limit" />
    </template>
  </BaseTable>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseTable,
    BasePagination
  },
  setup() {
    const page = ref(1)
    const limit = ref(10)
    const loading = ref(true)
    const total = ref(null as number | null)
    const pages = ref(null as number | null)
    const items = ref([] as CrossSell[])
    const props = [
      { name: 'Name', id: 'name' },
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
