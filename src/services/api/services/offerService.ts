import { client } from '@/services/api/client'

export default {
  async findAll(filters) {
    return (await client({ url: `/offer`, method: 'get', params: filters })).data
  },

  async findOneById(id) {
    return (await client({ url: `/offer/${id}`, method: 'get' })).data
  },

  async updateOneById(id, data) {
    return (await client({ url: `/offer/${id}`, method: 'put', data })).data
  },

  async deleteOneById(id) {
    return (await client({ url: `/offer/${id}`, method: 'delete' })).data
  }
}
