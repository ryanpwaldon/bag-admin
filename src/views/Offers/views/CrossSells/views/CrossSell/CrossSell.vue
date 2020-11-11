<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <div v-else>
    <div class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow">
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-lg font-medium leading-6 text-gray-800">{{ item?.product.title }}</h2>
        <div class="flex mt-3 space-x-4 text-sm font-medium leading-4 text-gray-500">
          <div class="flex items-center space-x-1">
            <Tag class="w-5 h-5" />
            <p>Cross sell</p>
          </div>
          <div v-if="false" class="flex items-center space-x-1">
            <Clock class="w-5 h-5" />
            <p>{{ item?.activeFor }}</p>
          </div>
          <div class="flex items-center space-x-1">
            <Calendar class="w-5 h-5" />
            <p>Created {{ $dayjs(item?.createdAt).format('Do MMM YYYY') }}</p>
          </div>
          <BaseBadge :text="item?.active ? 'Live' : 'Paused'" :theme="item?.active ? 'green' : 'yellow'" />
        </div>
      </div>
      <BaseTabs :links="links" class="px-4 sm:px-6" />
    </div>
    <router-view class="mt-6" v-model:item="item" />
  </div>
</template>

<script lang="ts">
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
import BaseTabs, { Link } from '@/components/BaseTabs/BaseTabs.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'
import Calendar from '@/icons/Calendar.vue'
import Clock from '@/icons/Clock.vue'
import List from '@/icons/List.vue'
import Pencil from '@/icons/Pencil.vue'
import Tag from '@/icons/Tag.vue'
import { defineComponent, ref, watchEffect } from 'vue'

const links: Link[] = [
  { title: 'Overview', name: 'cross-sell-overview', icon: List },
  { title: 'Edit', name: 'cross-sell-edit', icon: Pencil }
]

export default defineComponent({
  components: {
    BaseHeader,
    BaseLoader,
    BaseBadge,
    BaseTabs,
    Calendar,
    Clock,
    Tag
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const item = ref(null as CrossSell | null)
    const fetchItem = async () => {
      loading.value = true
      item.value = await crossSellService.findOneById(props.id)
      loading.value = false
    }
    watchEffect(fetchItem)
    return { item, loading, links }
  }
})
</script>
