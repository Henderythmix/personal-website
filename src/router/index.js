import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'My Name is Roberto Selles',
      component: HomeView,
    },
    {
      path: '/engineer',
      name: 'Engineering Portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EngineerPage.vue'),
    },
    {
      path: '/music',
      name: 'Music Portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MusicPage.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogPage.vue'),
    }
  ],
})

export default router
