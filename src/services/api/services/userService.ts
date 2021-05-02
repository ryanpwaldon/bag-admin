import { client } from '@/services/api/client'

export enum Permission {
  CrossSell = 'crossSell'
}

export enum Notification {
  Conversion = 'conversion',
  ConversionReportWeekly = 'conversionReportWeekly'
}

export interface User {
  email: string
  appUrl: string
  daysOld: number
  timezone: string
  appOpens: number
  shopOrigin: string
  subscription: string
  uninstalled: boolean
  currencyCode: string
  seenReviewPrompt: boolean
  permissions: Permission[]
  prevSubscriptions: string[]
  unsubscribedNotifications: Notification[]
}

export default {
  async findMe() {
    return (await client({ url: `/user`, method: 'get' })).data
  },

  async updateMe(data: Partial<User>) {
    return (await client({ url: `/user`, method: 'put', data })).data
  }
}
