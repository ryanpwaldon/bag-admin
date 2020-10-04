import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

type RouteRecordRawWithRequiredMeta = RouteRecordRaw & { meta: Meta; children?: Array<RouteRecordRawWithRequiredMeta> }

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
