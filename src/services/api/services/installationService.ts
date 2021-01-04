import app from '@/main'
import isFramed from '@/utils/isFramed'

export default {
  async install(shopOrigin: string) {
    const url = `${process.env.VUE_APP_SERVER_URL}/installation/start?shop=${shopOrigin}`
    if (isFramed) app.$shopify.redirectToExternalUrl(url)
    else window.location.href = url
    return new Promise(() => ({}))
  }
}
