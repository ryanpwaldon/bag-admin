import { client } from '@/services/api/client'

export default {
  async findStatus() {
    return (await client({ url: `/auth/status`, method: 'get' })).data
  }
}
