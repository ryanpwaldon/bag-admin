import { client } from '@/services/api/client'
import { Order } from '@/types/order'
import { CrossSell } from '@/services/api/services/crossSellService'

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
  }
}
