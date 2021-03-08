import store from '@/store/store'
import { AdminCurrencyCode } from '@/types/admin/types'
import { composeGid } from '@shopify/admin-graphql-api-utilities'

const getLocale = () => (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language)

const percent = (num: number) => {
  return Math.round((num * 100 + Number.EPSILON) * 100) / 100 + '%'
}

const currency = (amount: number, currencyCode: string | undefined = store.state.user?.currencyCode) => {
  return new Intl.NumberFormat(getLocale(), {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    currency: currencyCode || AdminCurrencyCode.Usd
  }).format(amount)
}

const gid = (key: string, id: string | number) => {
  return composeGid(key, id)
}

export default () => ({
  format: {
    currency,
    percent,
    gid
  }
})
