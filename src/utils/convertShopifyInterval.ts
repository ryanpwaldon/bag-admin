import { Interval } from '@/services/api/services/subscriptionService'

export default (interval: Interval) => {
  if (interval === Interval.Monthly) return 'month'
  if (interval === Interval.Annually) return 'year'
  throw new Error('Invalid shopify interval.')
}
