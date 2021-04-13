import { App } from 'vue'
import isFramed from '@/utils/isFramed'
import createApp from '@shopify/app-bridge'
import { Redirect } from '@shopify/app-bridge/actions'
import { getSessionToken } from '@shopify/app-bridge-utils'
import { ResourcePicker } from '@shopify/app-bridge/actions'
import getShopOriginFromUrl from '@/utils/getShopOriginFromUrl'
import { Section } from '@shopify/app-bridge/actions/Navigation/Redirect'

export default {
  install: (app: App) => {
    const shopOrigin = getShopOriginFromUrl()
    if (!shopOrigin || !isFramed) return console.warn('Shopify app bridge could not be created.')
    const shopifyAppBridge = createApp({ apiKey: process.env.VUE_APP_SHOPIFY_API_KEY, shopOrigin })
    const shopifyRedirect = Redirect.create(shopifyAppBridge)
    const shopifyProductPicker = ResourcePicker.create(shopifyAppBridge, { resourceType: ResourcePicker.ResourceType.Product })
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
      async openProductPicker({ selectMultiple = false, showVariants = false }) {
        shopifyProductPicker.set({ selectMultiple, showVariants })
        shopifyProductPicker.dispatch(ResourcePicker.Action.OPEN)
        const selection: { id: string }[] = await new Promise(resolve => {
          shopifyProductPicker.subscribe(ResourcePicker.Action.SELECT, ({ selection }) => resolve(selection))
          shopifyProductPicker.subscribe(ResourcePicker.Action.CANCEL, () => resolve([]))
        })
        shopifyProductPicker.unsubscribe()
        const productIds = selection.map(({ id }) => id)
        return productIds
      }
    }
  }
}
