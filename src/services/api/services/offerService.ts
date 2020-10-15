import { client } from '@/services/api/client'

export enum OfferType {
  MinimumSpend = 'minimumSpend',
  ProductAddOn = 'productAddOn',
  ProductUpgrade = 'productUpgrade'
}

export type Offer = {
  user: string
  type: OfferType
  active: boolean
  activeFor: number
  discountId: string
  title: string
  subtitle: string
  triggers: string[]
  productId: string
}

export default {
  async create(data: object) {
    return (await client({ url: `/offer`, method: 'post', data })).data
  },

  async findAll(query: object, sort: string, page: number, limit: number) {
    return (await client({ url: `/offer`, method: 'get', params: { query, sort, page, limit } })).data
  },

  async findOneById(id: string): Promise<Offer> {
    return (await client({ url: `/offer/${id}`, method: 'get' })).data
  },

  async updateOneById(id: string, data: object) {
    return (await client({ url: `/offer/${id}`, method: 'put', data })).data
  },

  async deleteOneById(id: string) {
    return (await client({ url: `/offer/${id}`, method: 'delete' })).data
  }
}
