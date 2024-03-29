import store from '@/store/store'
import getLocale from '@/utils/getLocale'
import { AdminCurrencyCode } from '@/types/admin/graphql'
import { composeGid } from '@shopify/admin-graphql-api-utilities'

const percent = (num: number) => {
  return Math.round((num * 100 + Number.EPSILON) * 100) / 100 + '%'
}

const currency = (amount: number | string) => {
  const locale = getLocale()
  amount = typeof amount === 'string' ? parseFloat(amount) : amount
  const currencyCode = store.state.user?.currencyCode || AdminCurrencyCode.Usd
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, currencyDisplay: 'narrowSymbol' }).format(amount)
  } catch (err) {
    console.log(err)
    return new Intl.NumberFormat(locale, { style: 'currency', currency: currencyCode, currencyDisplay: 'symbol' }).format(amount)
  }
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
