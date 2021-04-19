import { client } from '@/services/api/client'
import { AdminProductVariant } from '@/types/admin/graphql'

export default {
  async findByIds(ids: string[]): Promise<AdminProductVariant[]> {
    return (await client({ url: `/variant/ids`, method: 'get', params: { ids } })).data
  }
}
