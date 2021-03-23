import { client } from '@/services/api/client'
import { AdminProduct } from '@/types/admin/graphql'

export default {
  async findByIds(ids: string[]): Promise<AdminProduct[]> {
    return (await client({ url: `/product/ids`, method: 'get', params: { ids } })).data
  }
}
