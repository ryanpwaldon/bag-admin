import store from '@/store'
import { RouteLocationNormalized } from 'vue-router'
import getShopOriginFromUrl from '../../utils/getShopOriginFromUrl'
import installationService from '@/services/api/services/installationService'

export default async (to: RouteLocationNormalized) => {
  const shopOrigin = getShopOriginFromUrl()
  if (to.path === '/login') return true
  if (store.state.user) return true
  if (!shopOrigin) return '/login'
  if (await store.dispatch('authenticate')) return true
  return installationService.install(shopOrigin)
}
