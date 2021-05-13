<template>
  <BaseTable
    :loading="loading"
    :props="props"
    :items="items"
    :handle-selection="handleSelection"
    class="overflow-hidden bg-white rounded-lg shadow"
    v-if="loading || items.length"
  >
    <template #title="{ item }">
      <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
    </template>
    <template #goal="{ item }">
      <div class="text-sm text-gray-500">{{ format.currency(item.goal) }}</div>
    </template>
    <template #status="{ item }">
      <BaseBadge :text="item.active ? 'Active' : 'Paused'" :theme="item.active ? 'green' : 'gray'" />
    </template>
    <template #arrow>
      <div class="self-end text-sm font-medium text-blue-600">View →</div>
    </template>
    <template #pagination>
      <BasePagination :loading="loading" :total="total" v-model:page="page" :pages="pages" :limit="limit" />
    </template>
  </BaseTable>
  <BaseGridCard v-else>
    <div class="flex flex-col items-center justify-center h-44">
      <img class="h-10" src="@/assets/img/empty-box.svg" />
      <p class="mt-2 text-base font-medium leading-6 text-center text-gray-800">You have not created any progress bars</p>
      <BaseButton class="mt-3" text="Create a progress bar" @click="$router.push({ name: 'create-progress-bar' })" />
    </div>
  </BaseGridCard>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import useFormatter from '@/composables/useFormatter'
import { defineComponent, watchEffect, ref } from 'vue'
import BaseTable from '@/components/BaseTable/BaseTable.vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
import BaseButton from '@/components/BaseButton/BaseButton.vue'
import BaseGridCard from '@/components/BaseGridCard/BaseGridCard.vue'
import BasePagination from '@/components/BasePagination/BasePagination.vue'
import progressBarService, { ProgressBar } from '@/services/api/services/progressBarService'
export default defineComponent({
  name: 'Offers',
  components: {
    BaseBadge,
    BaseTable,
    BaseButton,
    BaseGridCard,
    BasePagination
  },
  setup() {
    const page = ref(1)
    const limit = ref(10)
    const loading = ref(true)
    const router = useRouter()
    const total = ref(null as number | null)
    const pages = ref(null as number | null)
    const items = ref([] as ProgressBar[])
    const { format } = useFormatter()
    const props = [
      { name: 'Title', id: 'title' },
      { name: 'Goal', id: 'goal' },
      { name: 'Status', id: 'status' },
      { name: '', id: 'arrow' }
    ]
    const handleSelection = (item: ProgressBar) => router.push({ name: 'progress-bar', params: { id: item.id } })
    const fetchItems = async () => {
      loading.value = true
      const response = await progressBarService.findAll({ page: page.value, limit: limit.value })
      items.value = response.docs
      total.value = response.total
      pages.value = response.pages
      loading.value = false
    }
    watchEffect(fetchItems)
    return { items, page, limit, props, total, pages, loading, handleSelection, format }
  }
})
</script>
