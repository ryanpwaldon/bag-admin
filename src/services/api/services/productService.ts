import { client } from '@/services/api/client'

export default {
  async findOne(id: string) {
    return (await client({ url: `/product/one`, method: 'get', params: { id } })).data
  }
}
