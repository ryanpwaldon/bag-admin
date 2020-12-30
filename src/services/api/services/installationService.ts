import app from '@/main'
import store from '@/store/store'

export default {
  async install(shopOrigin: string) {
    const url = `${process.env.VUE_APP_SERVER_URL}/installation/start?shop=${shopOrigin}`
    if (store.state.framed) app.$shopify.redirectToExternalUrl(url)
    else window.location.href = url
    return new Promise(() => ({}))
  }
}
