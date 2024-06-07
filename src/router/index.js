import { createRouter, createWebHistory } from 'vue-router'

// 组件
import HomePage from '../views/HomePage.vue'
import Note from '../views/Note.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/note/:id',
      component: Note
    }
  ]
})

export default router
