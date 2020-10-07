import { createRouter, createWebHistory, NavigationGuard, RouteRecordRaw } from 'vue-router'
import authGuard from './guards/authGuard'
import roleGuard from './guards/roleGuard'

type RouteRecordRawWithRequiredMeta = RouteRecordRaw & {
  children?: Array<RouteRecordRawWithRequiredMeta>
  meta: Meta
}

interface Meta {
  title: string
  breadcrumb: string
}

const routes: Array<RouteRecordRawWithRequiredMeta> = [
  {
    path: '/',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Home', breadcrumb: 'Home' }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    meta: { title: 'Login', breadcrumb: 'Login' }
  },
  {
    path: '/offers',
    component: () => import('@/views/Offers/Offers.vue'),
    meta: { title: 'Offers', breadcrumb: 'Offers' },
    children: [
      {
        path: '',
        component: () => import('@/views/Offers/views/Index/Index.vue'),
        meta: { title: 'Offers', breadcrumb: 'Offers' }
      },
      {
        path: 'offer',
        component: () => import('@/views/Offers/views/Offer/Offer.vue'),
        meta: { title: 'Offer', breadcrumb: 'Offer' }
      },
      {
        path: 'create',
        component: () => import('@/views/Offers/views/Create/Create.vue'),
        meta: { title: 'Create an Offer', breadcrumb: 'Create' },
        children: [
          {
            path: '',
            component: () => import('@/views/Offers/views/Create/views/Index/Index.vue'),
            meta: { title: 'Create', breadcrumb: 'Create' }
          },
          {
            path: 'minimum-spend',
            component: () => import('@/views/Offers/views/Create/views/MinimumSpend/MinimumSpend.vue'),
            meta: { title: 'Create', breadcrumb: 'Minimum Spend' }
          },
          {
            path: 'product-add-on',
            component: () => import('@/views/Offers/views/Create/views/ProductAddOn/ProductAddOn.vue'),
            meta: { title: 'Create', breadcrumb: 'Product Add-on' }
          }
        ]
      }
    ]
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart/Cart.vue'),
    meta: { title: 'Cart', breadcrumb: 'Cart' }
  },
  {
    path: '/account',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Account', breadcrumb: 'Account' }
  },
  {
    path: '/help',
    component: () => import('@/views/Home/Home.vue'),
    meta: { title: 'Help', breadcrumb: 'Help' }
  },
  {
    path: '/:path(.*)*',
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
