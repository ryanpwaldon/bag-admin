import { client } from '@/services/api/client'

export default {
  async create(data) {
    return (await client({ url: `/subscription/create`, method: 'post', data })).data
  },

  async findAllPlans() {
    return (await client({ url: `/subscription/plans`, method: 'get' })).data
  },

  async sync() {
    return (await client({ url: `/subscription/sync`, method: 'get' })).data
  },

  async cancel() {
    return (await client({ url: `/subscription/cancel`, method: 'get' })).data
  }
}
