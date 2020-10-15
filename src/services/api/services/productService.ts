import { client } from '@/services/api/client'

export interface Product {
  title: string
  image: string
}

export default {
  async findOne(id: string) {
    return (await client({ url: `/product/one`, method: 'get', params: { id } })).data
  }
}
