import { client } from '@/services/api/client'
import { AdminOrder } from '@/types/admin/types'

export default {
  async findByIds(ids: string[]): Promise<AdminOrder[]> {
    return (await client({ url: `/order/ids`, method: 'get', params: { ids } })).data
  }
}
