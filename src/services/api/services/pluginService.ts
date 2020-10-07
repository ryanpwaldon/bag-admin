import { client } from '@/services/api/client'

export default {
  async findMy() {
    return (await client({ url: `/plugin/my`, method: 'get' })).data
  },

  async updateMy(data) {
    return (await client({ url: `/plugin`, method: 'put', data })).data
  }
}
