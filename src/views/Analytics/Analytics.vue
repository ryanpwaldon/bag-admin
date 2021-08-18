<template>
  <BaseHeader />
  <div class="flex justify-between mb-6">
    <BaseMenu v-model="conversionType" :options="conversionTypeOptions" />
    <div class="flex space-x-5">
      <BaseIncrement @decrement="updateDate(-1)" @increment="updateDate(1)" :disableIncrement="dateIsPresent" />
      <BaseMenu v-model="period" :options="periodOptions" :labelOverride="periodLabel" align="right" />
    </div>
  </div>
  <div class="grid gap-6">
    <div class="w-full bg-white rounded shadow aspect-w-4 aspect-h-2">
      <div class="flex items-center justify-center" v-if="loading">
        <BaseSpinner class="w-6 h-6" />
      </div>
      <div class="flex flex-col p-6" v-else>
        <BaseMetrics :metrics="chartData.metrics" />
        <div class="relative flex-1 w-full min-h-0 mt-6">
          <BaseChart :plots="chartData.plots" :labels="chartData.labels" :interval="chartData.interval" @drillDown="handleChartDrillDown" />
        </div>
      </div>
    </div>
    <div class="w-full bg-white rounded shadow" :class="(loading || !topConversionsData.items.length) && 'aspect-w-10 aspect-h-4'">
      <div class="flex items-center justify-center" v-if="loading">
        <BaseSpinner class="w-6 h-6" />
      </div>
      <div class="p-6" v-else>
        <BaseTopConversions :topConversionsData="topConversionsData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { nanoid } from 'nanoid'
import BaseChart from '@/components/BaseChart/BaseChart.vue'
import BaseHeader from '@/components/BaseHeader/BaseHeader.vue'
import BaseSpinner from '@/components/BaseSpinner/BaseSpinner.vue'
import BaseMetrics from '@/components/BaseMetrics/BaseMetrics.vue'
import BaseIncrement from '@/components/BaseIncrement/BaseIncrement.vue'
import BaseMenu, { MenuOption } from '@/components/BaseMenu/BaseMenu.vue'
import { ConversionType } from '@/services/api/services/conversionService'
import { computed, defineComponent, nextTick, ref, watch } from '@vue/runtime-core'
import statisticsService, { TimeUnit } from '@/services/api/services/statisticsService'
import BaseTopConversions from '@/components/BaseTopConversions/BaseTopConversions.vue'

const conversionTypeOptions: MenuOption[] = [
  { label: 'Cross Sells', value: ConversionType.CrossSell },
  { label: 'Progress Bars', value: ConversionType.ProgressBar }
]

const periodOptions = [
  { label: 'Today', value: 'day-1' },
  { label: 'Week to date', value: 'week-1' },
  { label: 'Month to date', value: 'month-1' },
  { label: 'Year to date', value: 'year-1' },
  { label: 'Last 7 days', value: 'day-7' },
  { label: 'Last 30 days', value: 'day-30' }
]

const getToday = () => dayjs().format('YYYY-MM-DD')

// prettier-ignore
export default defineComponent({
  components: {
    BaseMenu,
    BaseChart,
    BaseHeader,
    BaseMetrics,
    BaseSpinner,
    BaseIncrement,
    BaseTopConversions
  },
  setup() {
    const loading = ref(true)
    const chartData = ref()
    const topConversionsData = ref()
    const period = ref('day-30')
    const date = ref(getToday())
    watch(period, () => date.value = getToday())
    const conversionType = ref(ConversionType.CrossSell)
    const periodLength = computed(() => parseInt(period.value.split('-')[1]))
    const periodUnit = computed(() => period.value.split('-')[0] as TimeUnit)
    const dateIsPresent = computed(() => dayjs().startOf(periodUnit.value).toString() === dayjs(date.value).startOf(periodUnit.value).toString())
    const updateDate = (direction: -1 | 1) => (date.value = dayjs(date.value).startOf(periodUnit.value).add(periodLength.value * direction, periodUnit.value).format('YYYY-MM-DD'))
    const handleChartDrillDown = (event: Record<string, string>) => {
      period.value = event.period
      nextTick(() => (date.value = event.date))
    }
    const periodLabel = computed(() => {
      if (dateIsPresent.value) return periodOptions.find(({ value }) => value === period.value)?.label
      const startDate = dayjs(date.value).startOf(periodUnit.value).subtract(periodLength.value - 1, periodUnit.value)
      const endDate = dayjs(date.value).startOf(periodUnit.value)
      if (periodUnit.value === 'day') return periodLength.value === 1 ? startDate.format('DD MMMM YYYY') : `${startDate.format('DD/MM/YY')} - ${endDate.format('DD/MM/YY')}`
      if (periodUnit.value === 'week') return periodLength.value === 1 ? `${startDate.format('DD/MM/YY')} - ${startDate.endOf(periodUnit.value).format('DD/MM/YY')}` : `${startDate.format('DD/MM/YY')} - ${endDate.format('DD/MM/YY')}`
      if (periodUnit.value === 'month') return periodLength.value === 1 ? startDate.format('MMMM YYYY') : `${startDate.format('MMMM YYYY')} - ${endDate.format('MMMM YYYY')}`
      if (periodUnit.value === 'year') return periodLength.value === 1 ? startDate.format('YYYY') : `${startDate.format('YYYY')} - ${endDate.format('YYYY')}`
    })
    const requestToken = ref()
    watch(
      [date, periodUnit, periodLength, conversionType],
      async () => {
        loading.value = true
        const currentRequestToken = nanoid(6)
        requestToken.value = currentRequestToken
        const requestParams = { date: date.value, period: periodUnit.value, periodLength: periodLength.value, conversionType: conversionType.value }
        const [ getChartDataResponse, getTopConversionsDataResponse ] = await Promise.all([
          statisticsService.getChartData(requestParams),
          statisticsService.getTopConversionsData(requestParams)
        ])
        if (requestToken.value !== currentRequestToken) return
        chartData.value = getChartDataResponse
        topConversionsData.value = getTopConversionsDataResponse
        loading.value = false
      },
      { immediate: true }
    )
    return {
      loading,
      period,
      chartData,
      updateDate,
      periodLabel,
      dateIsPresent,
      periodOptions,
      conversionType,
      topConversionsData,
      handleChartDrillDown,
      conversionTypeOptions
    }
  }
})
</script>
