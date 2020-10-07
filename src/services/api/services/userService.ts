import { client } from '@/services/api/client'

export default {
  async findMe() {
    return (await client({ url: `/user/me`, method: 'get' })).data
  }
}
