/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'vue'
import isFramed from '@/utils/isFramed'
import createApp from '@shopify/app-bridge'
import { Redirect } from '@shopify/app-bridge/actions'
import { getSessionToken } from '@shopify/app-bridge-utils'
import { ResourcePicker } from '@shopify/app-bridge/actions'
import getShopOriginFromUrl from '@/utils/getShopOriginFromUrl'
import { Section } from '@shopify/app-bridge/actions/Navigation/Redirect'
import { BaseResource, Product, ProductOptions } from '@shopify/app-bridge/actions/ResourcePicker'

const createShopifyPlugin = (shopOrigin: string) => {
  const shopifyAppBridge = createApp({ apiKey: process.env.VUE_APP_SHOPIFY_API_KEY, shopOrigin })
  const shopifyRedirect = Redirect.create(shopifyAppBridge)
  const shopifyProductPicker = ResourcePicker.create(shopifyAppBridge, { resourceType: ResourcePicker.ResourceType.Product })
  return {
    getSessionToken() {
      return getSessionToken(shopifyAppBridge)
    },
    redirectToAdminUrl(section: Section) {
      shopifyRedirect.dispatch(Redirect.Action.ADMIN_SECTION, section)
    },
    redirectToExternalUrl(url: string) {
      shopifyRedirect.dispatch(Redirect.Action.REMOTE, url)
    },
    async openProductPicker(options: Partial<ProductOptions> = {}) {
      let cancelled = false
      const defaultOptions: Partial<ProductOptions> = { showVariants: false, selectMultiple: false, initialSelectionIds: [] }
      const combinedOptions = Object.assign(defaultOptions, options)
      shopifyProductPicker.set(combinedOptions)
      shopifyProductPicker.dispatch(ResourcePicker.Action.OPEN)
      const selection: Product[] = await new Promise(resolve => {
        shopifyProductPicker.subscribe(ResourcePicker.Action.SELECT, ({ selection }) => resolve(selection))
        shopifyProductPicker.subscribe(ResourcePicker.Action.CANCEL, () => {
          cancelled = true
          resolve([])
        })
      })
      shopifyProductPicker.unsubscribe()
      if (cancelled) return combinedOptions.initialSelectionIds || []
      const productResources = selection.map(product => {
        const productResource: BaseResource = { id: product.id }
        if (options.showVariants) productResource.variants = product.variants.map(variant => ({ id: variant.id as string }))
        return productResource
      })
      return productResources
    }
  }
}

export type Shopify = ReturnType<typeof createShopifyPlugin>

export default {
  install: (app: App) => {
    const shopOrigin = getShopOriginFromUrl()
    if (!shopOrigin || !isFramed) return console.warn('Shopify app bridge could not be created.')
    app.config.globalProperties.$shopify = createShopifyPlugin(shopOrigin)
  }
}
