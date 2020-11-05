import { client } from '@/services/api/client'

export enum Role {
  Guest = 'guest',
  Installed = 'installed',
  Unsubscribed = 'unsubscribed',
  Starter = 'starter',
  Premium = 'premium'
}

export interface User {
  shopOrigin: string
  super: boolean
  roles: Role[]
}

export default {
  async findMe() {
    return (await client({ url: `/user`, method: 'get' })).data
  }
}
