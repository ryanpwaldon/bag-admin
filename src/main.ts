import App from '@/App.vue'
import { createApp } from 'vue'
import store from '@/store/store'
import '@/assets/styles/index.css'
import dayjs from '@/plugins/dayjs'
import router from '@/router/router'
import analytics from 'vue-gtag-next'
import * as Sentry from '@sentry/vue'
import shopify from '@/plugins/shopify'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  tracesSampleRate: 1.0,
  autoSessionTracking: true,
  dsn: process.env.VUE_APP_SENTRY_DSN,
  environment: process.env.VUE_APP_ENV,
  integrations: [new Integrations.BrowserTracing()],
  logErrors: process.env.VUE_APP_ENV !== 'production'
})

export default createApp(App)
  .use(store)
  .use(dayjs)
  .use(router)
  .use(shopify)
  .use(analytics, { property: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } })
  .mount('#app')
