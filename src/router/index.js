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
      component: () => import('@/views/ActivePgae.vue'),
    },

  ]
})

export default router
