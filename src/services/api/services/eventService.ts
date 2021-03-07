import { client } from '@/services/api/client'
import { DateRange } from '@/services/api/services/progressBarService'

export default {
  async countOrderCreatedEventsByDateRanges(dateRanges: DateRange[]): Promise<number> {
    return (await client({ url: `/event/order-created/count-by-date-ranges`, method: 'get', params: { dateRanges } })).data
  }
}
