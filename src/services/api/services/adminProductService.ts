import { client } from '@/services/api/client'
import { parseGid } from '@shopify/admin-graphql-api-utilities'

export default {
  async findOne(id: string) {
    return (await client({ url: `/admin-product/${parseGid(id)}`, method: 'get' })).data
  }
}
