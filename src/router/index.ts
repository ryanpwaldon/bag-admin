import { createRouter, createWebHistory, NavigationGuard, RouteRecordRaw } from 'vue-router'
import authGuard from './guards/authGuard'
import roleGuard from './guards/roleGuard'

type ExtendedRouteRecordRaw = RouteRecordRaw & {
  children?: Array<ExtendedRouteRecordRaw>
  meta: {
    title: string
    breadcrumb: string
  }
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
    component: () => import('@/views/Offers/Offers.vue'),
    meta: { title: 'Offers', breadcrumb: 'Offers' },
    children: [
      {
        path: '',
        name: 'offers',
        component: () => import('@/views/Offers/views/Index/Index.vue'),
        meta: { title: 'Offers', breadcrumb: 'Offers' }
      },
      {
        path: ':id',
        component: () => import('@/views/Offers/views/Offer/Offer.vue'),
        meta: { title: 'Offer', breadcrumb: 'Offer' },
        props: true,
        children: [
          {
            path: '',
            name: 'offer',
            component: () => import('@/views/Offers/views/Offer/views/Index/Index.vue'),
            meta: { title: 'Offer', breadcrumb: 'Offer' }
          },
          {
            path: 'edit',
            name: 'offer-edit',
            component: () => import('@/views/Offers/views/Offer/views/Edit/Edit.vue'),
            meta: { title: 'Edit', breadcrumb: 'Edit' }
          }
        ]
      },
      {
        path: 'create',
        component: () => import('@/views/Offers/views/Create/Create.vue'),
        meta: { title: 'Create an Offer', breadcrumb: 'Create' },
        children: [
          {
            path: '',
            name: 'create-offer',
            component: () => import('@/views/Offers/views/Create/views/Index/Index.vue'),
            meta: { title: 'Create', breadcrumb: 'Create' }
          },
          {
            path: 'minimum-spend',
            name: 'create-minimum-spend',
            component: () => import('@/views/Offers/views/Create/views/MinimumSpend/MinimumSpend.vue'),
            meta: { title: 'Create', breadcrumb: 'Minimum Spend' }
          },
          {
            path: 'product-add-on',
            name: 'create-product-add-on',
            component: () => import('@/views/Offers/views/Create/views/ProductAddOn/ProductAddOn.vue'),
            meta: { title: 'Create', breadcrumb: 'Product Add-on' }
          }
        ]
      }
    ]
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
