import { AdminCurrencyCode } from '@/types/admin/types'
import { composeGid } from '@shopify/admin-graphql-api-utilities'

const getLocale = () => (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language)

const currency = (amount: number, currencyCode?: string) => {
  return new Intl.NumberFormat(getLocale(), {
    style: 'currency',
    currency: currencyCode || AdminCurrencyCode.Usd
  }).format(amount)
}

const gid = (key: string, id: string | number) => {
  return composeGid(key, id)
}

export default () => ({
  format: {
    currency,
    gid
  }
})
