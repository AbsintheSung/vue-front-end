import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/active',
      redirect: '/active/1'
    },
    {
      path: '/active/:pagenum',
      name: 'Active',
      component: () => import('@/views/ActivePgae.vue')
    },
    {
      path: '/type-active/:type',
      name: 'TypeAction',
      component: () => import('@/views/TypeActivePage.vue'),
      children: [
        {
          path: ':page',
          name: 'FilterTick',
          component: () => import('@/views/TypeActiveContent.vue')
        }
      ],
      redirect: (to) => {
        // 當只有類型時，重定向到第一頁
        return { name: 'FilterTick', params: { ...to.params, page: '1' } }
      }
    },
    {
      path: '/ticket-detail/:ticketId',
      name: 'TicketDetail',
      component: () => import('@/views/TicketDetail.vue')
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
    }
  ]
})

export default router
