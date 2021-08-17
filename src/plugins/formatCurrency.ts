import { App } from 'vue'
import store from '@/store/store'
import getLocale from '@/utils/getLocale'
import { AdminCurrencyCode } from '@/types/admin/graphql'

const formatCurrency = (amount: number | string) => {
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

export default {
  install: (app: App) => {
    app.config.globalProperties.$formatCurrency = formatCurrency
  }
}

export type FormatCurrency = typeof formatCurrency
