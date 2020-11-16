import { client } from '@/services/api/client'

export type Cart = {
  user: string
  active: boolean
}

export default {
  async findOne() {
    return (await client({ url: `/cart`, method: 'get' })).data
  },

  async updateOne(body: Partial<Cart>) {
    return (await client({ url: `/cart`, method: 'put', data: body })).data
  }
}
