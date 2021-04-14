import { client } from '@/services/api/client'
import { TriggerGroup } from '@/types/internal'

export interface DateRange {
  start: Date
  end?: Date
}

export type ProgressBar = {
  id: string
  user: string
  active: boolean
  title: string
  activeHistory: DateRange[]
  completionMessage: string
  triggerGroup: TriggerGroup
  goal: number
  image: string
  createdAt: Date
}

export default {
  async create(data: object) {
    return (await client({ url: `/progress-bar`, method: 'post', data })).data
  },

  async findAll({ query, sort, page, limit }: { query?: object; sort?: string; page: number; limit: number }) {
    return (await client({ url: `/progress-bar`, method: 'get', params: { query, sort, page, limit } })).data
  },

  async findOneById(id: string): Promise<ProgressBar> {
    return (await client({ url: `/progress-bar/${id}`, method: 'get' })).data
  },

  async updateOneById(id: string, data: object) {
    return (await client({ url: `/progress-bar/${id}`, method: 'put', data })).data
  },

  async deleteOneById(id: string) {
    return (await client({ url: `/progress-bar/${id}`, method: 'delete' })).data
  }
}
