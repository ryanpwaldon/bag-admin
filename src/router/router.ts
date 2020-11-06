import { createRouter, createWebHistory, NavigationGuard, RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import authGuard from './guards/authGuard'
import roleGuard from './guards/roleGuard'

export type Breadcrumb = string | ((route: RouteLocationNormalizedLoaded) => string)

type ExtendedRouteRecordRaw =
  | (RouteRecordRaw & {
      children?: Array<ExtendedRouteRecordRaw>
      meta: {
        title: string
        breadcrumb: Breadcrumb
      }
    })
  | {
      path: string
      redirect: string | object
    }

const routes: Array<ExtendedRouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Home', breadcrumb: 'Home' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: { title: 'Login', breadcrumb: 'Login' }
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import('@/views/Offers/Offers.vue'),
    meta: { title: 'Offers', breadcrumb: 'Offers' },
    children: [
      {
        path: '',
        redirect: { name: 'cross-sells' }
      },
      {
        path: 'cross-sells',
        name: 'cross-sells',
        component: () => import('@/views/Offers/views/CrossSells/CrossSells.vue'),
        meta: { title: 'Cross sells', breadcrumb: 'Cross sells' }
      }
    ]
  },
  {
    path: '/offers/create',
    component: () => import('@/views/Offers/views/Create/Create.vue'),
    meta: { title: 'Create an Offer', breadcrumb: 'Create' }
  },
  {
    path: '/offers/cross-sells/create',
    name: 'create-cross-sell',
    component: () => import('@/views/Offers/views/CrossSells/views/Create/Create.vue'),
    meta: { title: 'Create a cross sell offer', breadcrumb: 'Cross Sell' }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart/Cart.vue'),
    meta: { title: 'Cart', breadcrumb: 'Cart' }
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Account', breadcrumb: 'Account' }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Help', breadcrumb: 'Help' }
  },
  {
    path: '/:path(.*)*',
    name: 'not-found',
    redirect: '/',
    meta: { title: '404 – Not Found', breadcrumb: '404 – Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((async to => {
  const results = await Promise.all([authGuard(to), roleGuard()])
  for (const result of results) if (result !== true || result !== undefined) return result
}) as NavigationGuard)

export default router
