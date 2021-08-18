<template>
  <div class="flex flex-col w-full h-full">
    <h3 class="text-base font-semibold">{{ title }}</h3>
    <div class="flex items-center justify-between mt-3 text-xs font-semibold text-gray-500" v-if="topConversionsData.items.length">
      <span>{{ subtitle }}</span>
      <span>Conversions</span>
    </div>
    <div class="flex flex-col flex-1 w-full mt-2 space-y-1">
      <div class="flex items-center justify-center flex-1" v-if="!topConversionsData.items.length">
        <span class="text-base font-medium text-gray-500">
          No data yet
        </span>
      </div>
      <div class="flex w-full space-x-6" v-for="(item, i) in topConversionsData.items" :key="i" v-else>
        <div class="relative w-full pl-2 py-1.5 flex items-center group">
          <div class="absolute top-0 left-0 h-full bg-blue-50" :style="{ width: `${(item.conversionCount / topCount) * 100}%` }" />
          <span
            class="relative cursor-pointer group-hover:underline"
            @click="handleTopConversionClick(item.convertedItem.id, item.convertedItem.title)"
          >
            {{ item.convertedItem.title }}
          </span>
          <router-link :to="item.convertedItem.path" class="hidden group-hover:block">
            <ExternalLinkIcon class="relative w-4 ml-2 text-gray-700" />
          </router-link>
        </div>
        <div class="space-x-2 font-medium py-1.5">
          <span class="text-gray-400" v-if="isCrossSell">({{ $formatCurrency(item.conversionRevenue) }})</span>
          <span>{{ item.conversionCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ExternalLinkIcon } from '@heroicons/vue/solid'
import { ConversionType } from '@/services/api/services/conversionService'
import { TopConversionsData } from '@/services/api/services/statisticsService'
export default defineComponent({
  components: { ExternalLinkIcon },
  props: {
    topConversionsData: {
      type: Object as PropType<TopConversionsData>,
      required: true
    }
  },
  setup(props, { emit }) {
    const isCrossSell = props.topConversionsData.conversionType === ConversionType.CrossSell
    const isProgressBar = props.topConversionsData.conversionType === ConversionType.ProgressBar
    const title = (() => {
      if (isCrossSell) return 'Top Cross Sells'
      if (isProgressBar) return 'Top Progress Bars'
      return 'Undefined'
    })()
    const subtitle = (() => {
      if (isCrossSell) return 'Cross Sell'
      if (isProgressBar) return 'Progress Bar'
      return 'Undefined'
    })()
    const topCount = props.topConversionsData.items.reduce((topCount, item) => {
      return item.conversionCount > topCount ? item.conversionCount : topCount
    }, 0)
    const handleTopConversionClick = (id: string, title: string) => {
      emit('drillDown', { id, title })
    }
    return { title, subtitle, topCount, isCrossSell, handleTopConversionClick }
  }
})
</script>
