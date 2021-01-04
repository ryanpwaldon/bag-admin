import { App } from 'vue'
import isFramed from '@/utils/isFramed'
import createApp from '@shopify/app-bridge'
import { Redirect } from '@shopify/app-bridge/actions'
import { ResourcePicker } from '@shopify/app-bridge/actions'
import { getSessionToken } from '@shopify/app-bridge-utils'
import { Section } from '@shopify/app-bridge/actions/Navigation/Redirect'
import { ProductOptions, Options } from '@shopify/app-bridge/actions/ResourcePicker'
import getShopOriginFromUrl from '@/utils/getShopOriginFromUrl'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // eslint-disable-next-line
    $shopify: any
  }
}

export default {
  install: (app: App) => {
    const shopOrigin = getShopOriginFromUrl()
    if (!shopOrigin || !isFramed) return console.warn('Shopify app bridge could not be created.')
    const shopifyAppBridge = createApp({ apiKey: process.env.VUE_APP_SHOPIFY_API_KEY, shopOrigin })
    const shopifyRedirect = Redirect.create(shopifyAppBridge)
    const shopifyProductPicker = ResourcePicker.create(shopifyAppBridge, {
      resourceType: ResourcePicker.ResourceType.Product,
      options: { selectMultiple: false, showVariants: false }
    })
    app.config.globalProperties.$shopify = {
      getSessionToken() {
        return getSessionToken(shopifyAppBridge)
      },
      redirectToAdminUrl(section: Section) {
        shopifyRedirect.dispatch(Redirect.Action.ADMIN_SECTION, section)
      },
      redirectToExternalUrl(url: string) {
        shopifyRedirect.dispatch(Redirect.Action.REMOTE, url)
      },
      productPicker: {
        update(options: Partial<Options | ProductOptions>) {
          shopifyProductPicker.set(options)
        },
        open() {
          shopifyProductPicker.dispatch(ResourcePicker.Action.OPEN)
          return new Promise(resolve => {
            shopifyProductPicker.subscribe(ResourcePicker.Action.SELECT, ({ selection }) => {
              shopifyProductPicker.unsubscribe()
              resolve(selection)
            })
            shopifyProductPicker.subscribe(ResourcePicker.Action.CANCEL, () => {
              shopifyProductPicker.unsubscribe()
              resolve([])
            })
          })
        }
      }
    }
  }
}
