import { client } from '@/services/api/client'
import { AdminProduct } from '@/types/admin/types'

export type CrossSell = {
  id: string
  user: string
  active: boolean
  activeFor: number
  title: string
  subtitle: string
  triggerProductIds: string[]
  productId: string
  product: AdminProduct
  createdAt: Date
  orders: string[]
}

export default {
  async create(data: object) {
    return (await client({ url: `/cross-sell`, method: 'post', data })).data
  },

  async findAll({ query, sort, page, limit }: { query?: object; sort?: string; page: number; limit: number }) {
    return (await client({ url: `/cross-sell`, method: 'get', params: { query, sort, page, limit } })).data
  },

  async findOneById(id: string): Promise<CrossSell> {
    return (await client({ url: `/cross-sell/${id}`, method: 'get' })).data
  },

  async updateOneById(id: string, data: object) {
    return (await client({ url: `/cross-sell/${id}`, method: 'put', data })).data
  },

  async deleteOneById(id: string) {
    return (await client({ url: `/cross-sell/${id}`, method: 'delete' })).data
  }
}
