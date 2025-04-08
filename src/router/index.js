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
import AdminView from '@/views/AdminView.vue'
import GestionVelosView from '@/views/admin/GestionVelosView.vue'
import GestionAccessoiresView from '@/views/admin/GestionAccessoiresView.vue'
import GestionArticleView from '@/views/admin/GestionArticleView.vue'
import GestionCategorieArticlesView from '@/views/admin/GestionCategorieArticlesView.vue'
import GestionMarquesView from '@/views/admin/GestionMarquesView.vue'
import GestionCategorieView from '@/views/admin/GestionCatégorieView.vue'
import GestionMoteursView from '@/views/admin/GestionMoteursView.vue'
import { useUserStore } from '@/stores/user';
import PotitArticleView from '@/views/PotitArticleView.vue'


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
      path: '/article/:id/:id',
      name: 'arti',
      component: PotitArticleView,
      props: true
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
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-velo',
      name: 'gestion-velo',
      component: GestionVelosView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-accessoire',
      name: 'gestion-accessoire',
      component: GestionAccessoiresView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-article',
      name: 'gestion-article',
      component: GestionArticleView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-categorie-article',
      name: 'gestion-categorie-article',
      component: GestionCategorieArticlesView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-marque',
      name: 'gestion-marque',
      component: GestionMarquesView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-categorie',
      name: 'gestion-categorie',
      component: GestionCategorieView,
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/gestion-moteur',
      name: 'gestion-moteur',
      component: GestionMoteursView,
      meta: { requiresAdmin: true }
    },
  ],

});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAdmin) {
    if (userStore.connected && userStore.current?.usertype === 'Admin') {
      next();
    } else {
      next('/auth');
    }
  } else {
    next();
  }
});

export default router
