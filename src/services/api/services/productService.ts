import { client } from '@/services/api/client'
import { AdminProduct } from '@/types/admin/types'
import { parseGid } from '@shopify/admin-graphql-api-utilities'

export default {
  async findOneById(id: string): Promise<AdminProduct> {
    return (await client({ url: `/product/${parseGid(id)}`, method: 'get' })).data
  },

  async findByIds(ids: string[]): Promise<AdminProduct[]> {
    return (await client({ url: `/product/ids`, method: 'get', params: { ids } })).data
  }
}
