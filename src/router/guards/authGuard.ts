import store from '@/store/store'
import getShopOriginFromUrl from '@/utils/getShopOriginFromUrl'
import installationService from '@/services/api/services/installationService'

export default async () => {
  const shopOrigin = getShopOriginFromUrl()
  if (!shopOrigin) return { name: 'error', props: { message: 'Shop origin missing' } }
  const user = store.state.user || (await store.dispatch('authenticate'))
  if (!user) return installationService.install(shopOrigin)
  if (!user.subscribed) return { name: 'welcome' }
  return true
}
