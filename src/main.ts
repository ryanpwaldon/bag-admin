import App from '@/App.vue'
import { createApp } from 'vue'
import store from '@/store/store'
import setup from '@/setup/setup'
import '@/assets/styles/index.css'
import dayjs from '@/plugins/dayjs'
import router from '@/router/router'
import analytics from 'vue-gtag-next'
import shopify from '@/plugins/shopify'

setup()
export default createApp(App)
  .use(store)
  .use(dayjs)
  .use(router)
  .use(shopify)
  .use(analytics, { property: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } })
  .mount('#app')
