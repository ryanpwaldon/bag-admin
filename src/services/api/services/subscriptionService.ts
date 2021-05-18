import { client } from '@/services/api/client'
import { User } from '@/services/api/services/userService'

export type ActiveSubscription = {
  id: string
  name: string
  price: number
  title?: string
  createdAt: Date
  trialDays: number
  interval: Interval
  currentPeriodEnd: Date
}

export type Subscription = {
  name: string
  price: number
  title: string
  legacy: boolean
  trialDays: number
  interval: Interval
  description: string
}

export enum Interval {
  Monthly = 'EVERY_30_DAYS',
  Annually = 'ANNUAL'
}

export default {
  async findAllAvailable(): Promise<Subscription[]> {
    return (await client({ url: `/subscription/available`, method: 'get' })).data
  },

  async findSuitableSubscriptionPair(): Promise<Subscription[]> {
    return (await client({ url: `/subscription/suitable`, method: 'get' })).data
  },

  async findActiveSubscription(): Promise<ActiveSubscription | null> {
    return (await client({ url: `/subscription/active`, method: 'get' })).data
  },

  async createFreeSubscription(subscriptionName: string): Promise<User> {
    return (await client({ url: `/subscription/free`, method: 'post', data: { subscriptionName } })).data
  },

  async createPaidSubscription(subscriptionName: string): Promise<string> {
    const confirmationUrl = (await client({ url: `/subscription/paid`, method: 'post', data: { subscriptionName } })).data
    return confirmationUrl
  },

  async sync() {
    return (await client({ url: `/subscription/sync`, method: 'get' })).data
  },

  async cancel() {
    return (await client({ url: `/subscription/cancel`, method: 'get' })).data
  }
}
