import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/note',
      component: () => import('@/views/Note.vue')
    }
  ]
})

export default router
