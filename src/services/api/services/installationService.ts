import app from '@/main'
import isFramed from '@/utils/isFramed'
import { client } from '@/services/api/client'
import { User } from '@/services/api/services/userService'

export default {
  async install(shopOrigin: string) {
    const url = `${process.env.VUE_APP_SERVER_URL}/installation/start?shop=${shopOrigin}`
    if (isFramed) app.$shopify.redirectToExternalUrl(url)
    else window.location.href = url
    return new Promise(() => ({}))
  },

  async setup(): Promise<User> {
    return (await client({ url: `/installation/setup`, method: 'get' })).data
  }
}
