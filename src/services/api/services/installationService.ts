import app from '@/main'

export default {
  async install(shopOrigin: string) {
    const url = `${process.env.VUE_APP_SERVER_URL}/installation/start?shop=${shopOrigin}`
    app.$shopify.redirectToExternalUrl(url)
    return new Promise(() => ({}))
  }
}
