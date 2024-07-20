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
      name: 'Active',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ActivePgae.vue'),
      children: [
        {
          path: '',
          name: 'AllProducts',
          component: () => import('@/views/filterTickPage.vue')
        },
        {
          path: ':type',
          name: 'FilteredProducts',
          component: () => import('@/views/filterTickPage.vue')
        },
      ],
    }
  ]
})

export default router
