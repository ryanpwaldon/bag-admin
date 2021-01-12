import { useStore } from 'vuex'
import { client } from '@/services/api/client'
import { User } from '@/services/api/services/userService'
import convertShopifyInterval from '@/utils/convertShopifyInterval'

export type ActiveSubscription = {
  id: string
  name: string
  createdAt: Date
  trialDays: number
  currentPeriodEnd: Date
}

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
  emphasize: string
  legacy: boolean
}

export type SubscriptionExtended = Subscription & {
  subscribed: boolean
  displayInterval: string
  trialAvailable: boolean
  ctaText: string
  ctaTheme: string
}

export default {
  async findAll(): Promise<SubscriptionExtended[]> {
    const { state } = useStore()
    const subscriptions: Subscription[] = (await client({ url: `/subscription`, method: 'get' })).data
    const extendedSubscriptions: SubscriptionExtended[] = subscriptions.map(subscription => {
      const subscribed = subscription.name === state.user.subscription
      const displayInterval = convertShopifyInterval(subscription.interval)
      const prevSubscribed = state.user.prevSubscriptions.includes(subscription.name)
      const trialAvailable = subscription.trialDays > 0 && !prevSubscribed
      const ctaText = subscribed ? 'Subscribed' : trialAvailable ? 'Try it free' : 'Get started'
      const ctaTheme = subscribed ? 'white' : subscription.emphasize ? 'blue' : 'lightBlue'
      return {
        ctaText,
        ctaTheme,
        subscribed,
        trialAvailable,
        displayInterval,
        ...subscription
      }
    })
    const filteredSubscriptions = extendedSubscriptions.filter(subscription => !subscription.legacy || subscription.subscribed)
    const sortedSubscriptions = filteredSubscriptions
      .sort((a, b) => a.price - b.price)
      .sort((a, b) => (a.legacy === b.legacy ? 0 : a.legacy ? -1 : 1))
    return sortedSubscriptions
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
