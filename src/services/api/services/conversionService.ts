import { Order } from '@/types/order'
import { client } from '@/services/api/client'
import { CrossSell } from '@/services/api/services/crossSellService'
import { ProgressBar } from '@/services/api/services/progressBarService'

export type Conversion<T> = {
  object: T
  user: string
  type: string
  value: number
  order: Order
}

export default {
  async findByCrossSellId(id: string): Promise<Conversion<CrossSell>[]> {
    return (await client({ url: `/conversion/cross-sell/${id}`, method: 'get' })).data
  },
  async findByProgressBarId(id: string): Promise<Conversion<ProgressBar>[]> {
    return (await client({ url: `/conversion/progress-bar/${id}`, method: 'get' })).data
  }
}
