import { client } from '@/services/api/client'

export interface User {
  shopOrigin: string
  subscription: string
  prevSubscriptions: string[]
}

export default {
  async findMe() {
    return (await client({ url: `/user`, method: 'get' })).data
  }
}
