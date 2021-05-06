import store from '@/store/store'
import { trackRouter } from 'vue-gtag-next'
import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import BaseLayoutCenter from '@/components/BaseLayoutCenter/BaseLayoutCenter.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/Auth/Auth.vue'),
    meta: { title: 'Auth', layout: BaseLayoutCenter, transition: true },
    props: true
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Home', layout: BaseLayout }
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import('@/views/Offers/Offers.vue'),
    meta: { title: 'Offers', layout: BaseLayout },
    redirect: { name: 'progress-bars' },
    children: [
      {
        path: 'cross-sells',
        name: 'cross-sells',
        component: () => import('@/views/Offers/views/CrossSells/CrossSells.vue')
      },
      {
        path: 'progress-bars',
        name: 'progress-bars',
        component: () => import('@/views/Offers/views/ProgressBars/ProgressBars.vue')
      }
    ]
  },
  {
    path: '/offers/create',
    name: 'create-offer',
    component: () => import('@/views/Offers/views/Create/Create.vue'),
    meta: { title: 'Create an offer', layout: BaseLayout }
  },
  {
    path: '/offers/cross-sells/create',
    name: 'create-cross-sell',
    component: () => import('@/views/Offers/views/CrossSells/views/Create/Create.vue'),
    meta: { title: 'Create a cross sell', layout: BaseLayout }
  },
  {
    path: '/offers/progress-bar/create',
    name: 'create-progress-bar',
    component: () => import('@/views/Offers/views/ProgressBars/views/Create/Create.vue'),
    meta: { title: 'Create a progress bar', layout: BaseLayout }
  },
  {
    props: true,
    path: '/offers/cross-sells/:id',
    name: 'cross-sell',
    component: () => import('@/views/Offers/views/CrossSells/views/CrossSell/CrossSell.vue'),
    meta: { title: 'Cross sell', layout: BaseLayout },
    redirect: { name: 'cross-sell-activity' },
    children: [
      {
        path: 'activity',
        name: 'cross-sell-activity',
        component: () => import('@/views/Offers/views/CrossSells/views/CrossSell/views/Activity/Activity.vue')
      },
      {
        path: 'edit',
        name: 'cross-sell-edit',
        component: () => import('@/views/Offers/views/CrossSells/views/CrossSell/views/Edit/Edit.vue')
      }
    ]
  },
  {
    props: true,
    path: '/offers/progress-bars/:id',
    name: 'progress-bar',
    component: () => import('@/views/Offers/views/ProgressBars/views/ProgressBar/ProgressBar.vue'),
    meta: { title: 'Progress bar', layout: BaseLayout },
    redirect: { name: 'progress-bar-activity' },
    children: [
      {
        path: 'activity',
        name: 'progress-bar-activity',
        component: () => import('@/views/Offers/views/ProgressBars/views/ProgressBar/views/Activity/Activity.vue')
      },
      {
        path: 'edit',
        name: 'progress-bar-edit',
        component: () => import('@/views/Offers/views/ProgressBars/views/ProgressBar/views/Edit/Edit.vue')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart/Cart.vue'),
    meta: { title: 'Cart', layout: BaseLayout }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/Account/Account.vue'),
    meta: { title: 'Account', layout: BaseLayout }
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import('@/views/Subscribe/Subscribe.vue'),
    meta: { title: 'Subscribe', layout: BaseLayoutCenter, transition: true }
  },
  {
    path: '/plans',
    name: 'plans',
    component: () => import('@/views/Plans/Plans.vue'),
    meta: { title: 'Plans', layout: BaseLayout }
  },
  {
    path: '/error',
    name: 'error',
    props: true,
    component: () => import('@/views/Error/Error.vue'),
    meta: { title: 'Error', layout: BaseLayoutCenter, transition: true }
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('@/views/Setup/Setup.vue'),
    meta: { title: 'Setup', layout: BaseLayoutCenter, transition: true }
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('@/views/Review/Review.vue'),
    meta: { title: 'Review', layout: BaseLayoutCenter, transition: true }
  },
  {
    path: '/:path(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let isFirstRoute = true
router.beforeEach(to => {
  if (isFirstRoute) {
    isFirstRoute = false
    store.commit('setContinueToRoute', to)
    return { name: 'auth', query: to.query }
  }
  return true
})

trackRouter(router)

export default router
