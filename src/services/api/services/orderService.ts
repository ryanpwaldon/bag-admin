import { client } from '@/services/api/client'
import { AdminRestOrder } from '@/types/admin/rest'
import { DateRange } from '@/services/api/services/progressBarService'

export type Order = {
  user: string
  details: AdminRestOrder
}

export default {
  async countByDateRanges(dateRanges: DateRange[]): Promise<number> {
    return (await client({ url: `/order/count-by-date-ranges`, method: 'get', params: { dateRanges } })).data
  }
}
