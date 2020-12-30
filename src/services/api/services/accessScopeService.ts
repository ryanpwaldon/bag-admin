import { client } from '@/services/api/client'

export default {
  async checkStatus() {
    return (await client({ url: `/access-scope/status`, method: 'get' })).data
  }
}
