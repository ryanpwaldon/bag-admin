import createApp from '@shopify/app-bridge'
import { Redirect } from '@shopify/app-bridge/actions'
import { getSessionToken } from '@shopify/app-bridge-utils'
import { ResourceType } from '@shopify/app-bridge/actions/Navigation/Redirect'
import getShopOriginFromUrl from '../utils/getShopOriginFromUrl'
import store from '@/store'
import { App } from 'vue'

export default {
  install: (app: App) => {
    const framed = store.state.framed
    const shopOrigin = getShopOriginFromUrl()
    if (!shopOrigin || !framed) return console.warn('Shopify app bridge could not be created.')
    const shopifyAppBridge = createApp({ apiKey: process.env.VUE_APP_SHOPIFY_API_KEY, shopOrigin })
    const shopifyRedirect = Redirect.create(shopifyAppBridge)
    app.config.globalProperties.$shopify = {
      getSessionToken() {
        return getSessionToken(shopifyAppBridge)
      },
      redirectToAdminSection(section: ResourceType) {
        shopifyRedirect.dispatch(Redirect.Action.ADMIN_SECTION, { name: section })
      },
      redirectToExternalUrl(url: string) {
        shopifyRedirect.dispatch(Redirect.Action.REMOTE, url)
      }
    }
  }
}
