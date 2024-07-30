import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    redirect: '/products/1'
  },
  {
    path: '/products/:pagenum',
    name: 'Products',
    component: () => import('@/views/ProductsPgae.vue')
  },
  {
    path: '/type-products/:type',
    name: 'TypeProducts',
    component: () => import('@/views/TypeProductsPage.vue'),
    children: [
      {
        path: ':page',
        name: 'FilterProducts',
        component: () => import('@/views/TypeProductsContent.vue')
      }
    ],
    redirect: (to) => {
      // 當只有類型時，重定向到第一頁
      return { name: 'FilterProducts', params: { ...to.params, page: '1' } }
    }
  },
  {
    path: '/product-detail/:productId',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/CartPage.vue')
  },
  {
    path: '/checkoutform',
    name: 'CheckoutForm',
    component: () => import('@/views/CheckoutForm.vue')
  },
  {
    path: '/orderpay/:orderId',
    name: 'OrderPay',
    component: () => import('@/views/OrderPage.vue')
  },
  {
    path: '/order-list/:pageNum?',
    name: 'OrderList',
    component: () => import('@/views/OrderListPage.vue'),
    beforeEnter: (to, from, next) => {
      if (!to.params.pageNum || to.params.pageNum <= 0) {
        next({ name: 'OrderList', params: { pageNum: '1' } })
      } else {
        next()
      }
    }
  },
  //配置404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
