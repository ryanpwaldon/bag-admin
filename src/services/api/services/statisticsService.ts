import { client } from '@/services/api/client'
import { ConversionType } from '@/services/api/services/conversionService'

export type TimeUnit = 'hour' | 'day' | 'week' | 'month' | 'year'

interface GetStatisticsQuery {
  date: string
  offerId: string
  period: TimeUnit
  periodLength: number
  conversionType: ConversionType
}

export interface TopConversionsData {
  conversionType: ConversionType
  items: {
    convertedItem: {
      id: string
      title: string
      path: string
    }
    conversionCount: number
    conversionRevenue: number
  }[]
}

export default {
  async getChartData({ date, offerId, period, periodLength, conversionType }: GetStatisticsQuery) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (await client({ url: `/statistics/chart`, method: 'get', params: { date, offerId, period, periodLength, conversionType, timezone } })).data
  },
  async getTopConversionsData({ date, offerId, period, periodLength, conversionType }: GetStatisticsQuery): Promise<TopConversionsData> {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return (await client({ url: `/statistics/top-conversions`, method: 'get', params: { date, offerId, period, periodLength, conversionType, timezone } })).data // prettier-ignore
  }
}
