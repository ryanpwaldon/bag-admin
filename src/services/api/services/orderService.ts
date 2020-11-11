import { client } from '@/services/api/client'

export default {
  async findByIds(ids: string[]) {
    return (await client({ url: `/order/ids`, method: 'get', params: { ids } })).data
  }
}
