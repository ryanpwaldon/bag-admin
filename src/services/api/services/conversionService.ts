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

export interface FindByOfferQuery {
  page: number
  sort?: string
  limit: number
  offerId: string
  conversionType: ConversionType
}

export default {
  async findByOffer({ offerId, conversionType, sort, page, limit }: FindByOfferQuery) {
    return (
      await client({
        url: `/conversion/${conversionType}/${offerId}`,
        method: 'get',
        params: { sort, page, limit, populate: ['object', 'user', 'order'] }
      })
    ).data
  },

  async getTotalCountByOffer(offerId: string, conversionType: ConversionType) {
    return (await client({ url: `/conversion/${conversionType}/${offerId}/count`, method: 'get' })).data
  },

  async getCrossSellIncome(offerId: string) {
    return (await client({ url: `/conversion/cross-sell/${offerId}/income`, method: 'get' })).data
  }
}
