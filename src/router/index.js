import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import VeloView from '../views/VeloView.vue'
import VelosView from '../views/VelosView.vue'
import AccessoiresView from '../views/AccessoiresView.vue'
import AccessoireView from '../views/AccessoireView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import MarqueView from '@/views/MarqueView.vue'
import MagasinView from '@/views/MagasinView.vue'
import PanierView from '@/views/PanierView.vue'


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
      component: VelosView,
    },
    {
      path: '/velo/:id',
      name: 'velo',
      component: VeloView,
      props: true 
    },
    {
      path: '/accessoires',
      name: 'accessoires',
      component: AccessoiresView,
    },
    {
      path: '/accessoire/:id',  // :id est un paramètre dynamique
      name: 'accessoire',
      component: AccessoireView,
      props: true  // Permet de passer l'ID à la props du composant,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView,
    },
    {
      path: '/article/:id',  // :id est un paramètre dynamique
      name: 'article',
      component: ArticleView,
      props: true  // Permet de passer l'ID à la props du composant,
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
    {
      path: '/panier',
      name: 'panier',
      component: PanierView,
    },
  ],
})

export default router
