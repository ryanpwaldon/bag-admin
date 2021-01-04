import { client } from '@/services/api/client'
import { User } from '@/services/api/services/userService'

export enum Interval {
  Monthly = 'EVERY_30_DAYS',
  Annually = 'ANNUAL'
}

export type Subscription = {
  name: string
  price: number
  trialDays: number
  interval: Interval
  title: string
  description: string
  featuresIncluded: string[]
  featuresExcluded: string[]
  ctaText: string
  ctaTheme: string
  legacy: boolean
}

export default {
  async createFreeSubscription(subscriptionName: string): Promise<User> {
    return (await client({ url: `/subscription/free`, method: 'post', data: { subscriptionName } })).data
  },

  async createPaidSubscription(subscriptionName: string): Promise<string> {
    const confirmationUrl = (await client({ url: `/subscription/paid`, method: 'post', data: { subscriptionName } })).data
    return confirmationUrl
  },

  async findAll(): Promise<Subscription[]> {
    return (await client({ url: `/subscription`, method: 'get' })).data
  },

  async sync() {
    return (await client({ url: `/subscription/sync`, method: 'get' })).data
  },

  async cancel() {
    return (await client({ url: `/subscription/cancel`, method: 'get' })).data
  }
}
