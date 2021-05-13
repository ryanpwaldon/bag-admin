import { client } from '@/services/api/client'
import { Order } from '@/services/api/services/orderService'

export type Conversion<T> = {
  object: T
  user: string
  type: ConversionType
  value: number
  order: Order
}

export enum ConversionType {
  CrossSell = 'CrossSell',
  ProgressBar = 'ProgressBar'
}

export default {
  async findByOffer({
    offerId,
    conversionType,
    sort,
    page,
    limit
  }: {
    offerId: string
    conversionType: ConversionType
    sort?: string
    page: number
    limit: number
  }) {
    return (await client({ url: `/conversion/${conversionType}/${offerId}`, method: 'get', params: { sort, page, limit } })).data
  }
}
