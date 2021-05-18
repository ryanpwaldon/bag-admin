import { client } from '@/services/api/client'

export default {
  async redeem(code: string) {
    return (await client({ url: `/coupon/redeem/${code}`, method: 'get' })).data
  }
}
