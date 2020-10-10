import { client } from '@/services/api/client'

export default {
  async create(data: object) {
    return (await client({ url: `/offer`, method: 'post', data })).data
  },

  async findAll(page: number, itemsPerPage: number, filters?: object) {
    return (await client({ url: `/offer`, method: 'get', params: { page, itemsPerPage, filters } })).data
  },

  async findOneById(id: string) {
    return (await client({ url: `/offer/${id}`, method: 'get' })).data
  },

  async updateOneById(id: string, data: object) {
    return (await client({ url: `/offer/${id}`, method: 'put', data })).data
  },

  async deleteOneById(id: string) {
    return (await client({ url: `/offer/${id}`, method: 'delete' })).data
  }
}
