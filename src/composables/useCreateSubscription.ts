import app from '@/main'
import store from '@/store/store'
import router from '@/router/router'
import subscriptionService from '@/services/api/services/subscriptionService'

const createFreeSubscription = async (subscriptionName: string) => {
  const user = await subscriptionService.createFreeSubscription(subscriptionName)
  store.commit('setUser', user)
}

const createPaidSubscription = async (subscriptionName: string) => {
  const confirmationUrl = await subscriptionService.createPaidSubscription(subscriptionName)
  app.$shopify.redirectToExternalUrl(confirmationUrl)
}

const createSubscription = async (subscriptionName: string, isFree: boolean) => {
  if (isFree) {
    await createFreeSubscription(subscriptionName)
    router.push({ name: 'home' })
  } else {
    createPaidSubscription(subscriptionName)
  }
}

export default () => createSubscription
