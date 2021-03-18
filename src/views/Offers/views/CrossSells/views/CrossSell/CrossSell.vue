<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <div v-else>
    <div class="overflow-hidden bg-white rounded-lg shadow">
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-lg font-medium leading-6 text-gray-800">{{ crossSell?.title }}</h2>
        <div class="flex mt-3 space-x-4 text-sm font-medium leading-4 text-gray-500">
          <div class="flex items-center space-x-1">
            <Calendar class="w-5 h-5 text-gray-400" />
            <p>Created {{ $dayjs(crossSell?.createdAt).format('Do MMM YYYY') }}</p>
          </div>
          <BaseBadge :text="crossSell?.active ? 'Live' : 'Paused'" :theme="crossSell?.active ? 'green' : 'yellow'" />
        </div>
      </div>
    </div>
    <BaseTabs :links="links" class="mt-8" />
    <router-view class="mt-6" v-model:crossSell="crossSell" />
  </div>
</template>

<script lang="ts">
import Chart from '@/icons/Chart.vue'
import Cog from '@/icons/Cog.vue'
import Calendar from '@/icons/Calendar.vue'
import { defineComponent, ref, watchEffect } from 'vue'
import BaseBadge from '@/components/BaseBadge/BaseBadge.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseLoader from '@/components/BaseLoader/BaseLoader.vue'
import BaseTabs, { Link } from '@/components/BaseTabs/BaseTabs.vue'
import crossSellService, { CrossSell } from '@/services/api/services/crossSellService'

const links: Link[] = [
  { title: 'Activity', name: 'cross-sell-activity', icon: Chart },
  { title: 'Settings', name: 'cross-sell-edit', icon: Cog }
]

export default defineComponent({
  components: {
    BaseHeader,
    BaseLoader,
    BaseBadge,
    BaseTabs,
    Calendar
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const loading = ref(true)
    const crossSell = ref(null as CrossSell | null)
    const fetchItem = async () => {
      loading.value = true
      crossSell.value = await crossSellService.findOneById(props.id)
      loading.value = false
    }
    watchEffect(fetchItem)
    return { crossSell, loading, links }
  }
})
</script>
