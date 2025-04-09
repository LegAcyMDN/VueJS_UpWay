import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

/*import HomeView from '../views/HomeView.vue'
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
import AdminView from '@/views/AdminView.vue'
import GestionVelosView from '@/views/admin/GestionVelosView.vue'
import GestionAccessoiresView from '@/views/admin/GestionAccessoiresView.vue'
import GestionArticleView from '@/views/admin/GestionArticleView.vue'
import GestionCategorieArticlesView from '@/views/admin/GestionCategorieArticlesView.vue'
import GestionMarquesView from '@/views/admin/GestionMarquesView.vue'
import GestionCategorieView from '@/views/admin/GestionCatégorieView.vue'
import GestionMoteursView from '@/views/admin/GestionMoteursView.vue'

import PotitArticleView from '@/views/PotitArticleView.vue'
import ClientView from '@/views/ClientView.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
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
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/velos',
      name: 'velos',
      component: () => import('../views/VelosView.vue'),
    },
    {
      path: '/velo/:id',
      name: 'velo',
      component: () => import('../views/VeloView.vue'),
      props: true,
    },
    {
      path: '/accessoires',
      name: 'accessoires',
      component: () => import('../views/AccessoiresView.vue'),
    },
    {
      path: '/accessoire/:id', // :id est un paramètre dynamique
      name: 'accessoire',
      component: () => import('../views/AccessoireView.vue'),
      props: true, // Permet de passer l'ID à la props du composant,
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('../views/ArticlesView.vue'),
    },
    {
      path: '/article/:id', // :id est un paramètre dynamique
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
      props: true, // Permet de passer l'ID à la props du composant,
    },
    {
      path: '/article/:catid/:id',
      name: 'arti',
      component: () => import('../views/PotitArticleView.vue'),
      props: true,
    },
    {
      path: '/marques',
      name: 'marques',
      component: () => import('../views/MarqueView.vue'),
    },
    {
      path: '/magasins',
      name: 'magasins',
      component: () => import('../views/MagasinView.vue'),
    },
    {
      path: '/panier',
      name: 'panier',
      component: () => import('../views/PanierView.vue'),
    },
    {
      path: '/client',
      name: 'client',
      component: () => import('../views/ClientView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-velo',
      name: 'gestion-velo',
      component: () => import('../views/admin/GestionVelosView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-accessoire',
      name: 'gestion-accessoire',
      component: () => import('../views/admin/GestionAccessoiresView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-article',
      name: 'gestion-article',
      component: () => import('../views/admin/GestionArticleView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-categorie-article',
      name: 'gestion-categorie-article',
      component: () => import('../views/admin/GestionCategorieArticlesView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-marque',
      name: 'gestion-marque',
      component: () => import('../views/admin/GestionMarquesView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-categorie',
      name: 'gestion-categorie',
      component: () => import('../views/admin/GestionCatégorieView.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/gestion-moteur',
      name: 'gestion-moteur',
      component: () => import('../views/admin/GestionMoteursView.vue'),
      meta: { requiresAdmin: true },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAdmin) {
    if (userStore.connected && userStore.current?.usertype === 'Admin') {
      next()
    } else {
      next('/auth')
    }
  } else {
    next()
  }
})

export default router
