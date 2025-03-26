import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import VeloView from '../views/VeloView.vue'
import AccessoiresView from '../views/AccessoiresView.vue'
import AccessoireView from '../views/AccessoireView.vue'
import ArticleView from '../views/ArticleView.vue'
import MarqueView from '@/views/MarqueView.vue'
import MagasinView from '@/views/MagasinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/velos',
      name: 'velos',
      component: VeloView,
    },
    {
      path: '/accessoires',
      name: 'accessoires',
      component: AccessoiresView,
    },
    {
      path: '/accessoire',
      name: 'accessoire',
      component: AccessoireView,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleView,
    },
    {
      path: '/marques',
      name: 'marques',
      component: MarqueView,
    },
    {
      path: '/magasins',
      name: 'magasins',
      component: MagasinView,
    },
  ],
})

export default router
