import { Shopify } from '@/plugins/shopify'
import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $shopify: Shopify
  }
}
