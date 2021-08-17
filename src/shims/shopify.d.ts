import { Shopify } from '@/plugins/shopify'
import { ComponentCustomProperties } from 'vue'
import { FormatCurrency } from '@/plugins/formatCurrency'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $shopify: Shopify
    $formatCurrency: FormatCurrency
  }
}
