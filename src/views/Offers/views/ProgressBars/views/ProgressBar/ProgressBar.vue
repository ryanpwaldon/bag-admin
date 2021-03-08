<template>
  <BaseHeader />
  <BaseLoader v-if="loading" />
  <div v-else>
    <div class="overflow-hidden bg-white rounded-lg shadow">
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-lg font-medium leading-6 text-gray-800">{{ progressBar?.title }} · {{ format.currency(progressBar?.goal) }}</h2>
        <div class="flex mt-3 space-x-4 text-sm font-medium leading-4 text-gray-500">
          <div class="flex items-center space-x-1">
            <Calendar class="w-5 h-5 text-gray-400" />
            <p>Created {{ $dayjs(progressBar?.createdAt).format('Do MMM YYYY') }}</p>
          </div>
          <BaseBadge :text="progressBar?.active ? 'Live' : 'Paused'" :theme="progressBar?.active ? 'green' : 'yellow'" />
        </div>
      </div>
    </div>
    <BaseTabs :links="links" class="mt-8" />
    <router-view class="mt-6" v-model:progressBar="progressBar" />
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
import progressBarService, { ProgressBar } from '@/services/api/services/progressBarService'
import useFormatter from '@/composables/useFormatter'

const links: Link[] = [
  { title: 'Activity', name: 'progress-bar-activity', icon: Chart },
  { title: 'Settings', name: 'progress-bar-edit', icon: Cog }
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
    const { format } = useFormatter()
    const progressBar = ref(null as ProgressBar | null)
    const fetchItem = async () => {
      loading.value = true
      progressBar.value = await progressBarService.findOneById(props.id)
      loading.value = false
    }
    watchEffect(fetchItem)
    return { format, progressBar, loading, links }
  }
})
</script>
