import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import setup from '@/setup'
import VueShopify from '@/plugins/vue-shopify'
import '@/assets/styles/index.css'

setup()
export default createApp(App)
  .use(store)
  .use(router)
  .use(VueShopify)
  .mount('#app')
