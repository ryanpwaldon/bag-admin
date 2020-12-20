import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store/store'
import setup from '@/setup'
import shopify from '@/plugins/shopify'
import dayjs from '@/plugins/dayjs'
import analytics from 'vue-gtag-next'
import '@/assets/styles/index.css'

setup()
export default createApp(App)
  .use(store)
  .use(dayjs)
  .use(router)
  .use(shopify)
  .use(analytics, { property: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } })
  .mount('#app')
