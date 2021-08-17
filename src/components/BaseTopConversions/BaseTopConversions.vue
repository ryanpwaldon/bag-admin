<template>
  <div class="w-full">
    <h3 class="text-base font-semibold">{{ title }}</h3>
    <div class="flex items-center justify-between mt-3 text-xs font-semibold text-gray-500">
      <span>{{ subtitle }}</span>
      <span>Conversions</span>
    </div>
    <div class="flex flex-col w-full mt-2 space-y-1">
      <div class="flex w-full space-x-6" v-for="(item, i) in topConversionsData.items" :key="i">
        <div class="relative w-full pl-2 py-1.5 flex">
          <div class="absolute top-0 left-0 h-full bg-blue-50" :style="{ width: `${(item.conversionCount / topCount) * 100}%` }" />
          <div class="relative w-5 h-5 bg-gray-100 bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${item.convertedItem})` }" />
          <span class="relative ml-2">{{ item.convertedItem }}</span>
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
import { ConversionType } from '@/services/api/services/conversionService'
import { TopConversionsData } from '@/services/api/services/statisticsService'
export default defineComponent({
  props: {
    topConversionsData: {
      type: Object as PropType<TopConversionsData>,
      required: true
    }
  },
  setup(props) {
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
    return { title, subtitle, topCount, isCrossSell }
  }
})
</script>
