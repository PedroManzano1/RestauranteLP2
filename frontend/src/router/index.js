import { createRouter, createWebHashHistory } from 'vue-router'

import MainLayout from '../components/MainLayout.vue';
import HomeView from '../view/HomeView.vue';
import LoginView from '../view/Usuario/loginUsuarioView.vue';
import CadastrarUsuarioView from '../view/Usuario/cadastrarUsuarioView.vue';
import cadastrarRestauranteView from '../view/Restaurante/cadastrarRestauranteView.vue';
import ListarRestaurante from '@/components/Restaurante/listarRestaurante.vue';
import cadastrarReviewView from '@/view/Review/cadastrarReviewView.vue';

import listarReview from '@/components/Review/listarReview.vue';

const routes = [
  {
    path: '/',
    redirect: '/login' 
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView 
  },
  {
    path: '/cadastrar-usuario',
    name: 'cadastrarUsuario',
    component: CadastrarUsuarioView 
  },
  {
    path: '/app',
    component: MainLayout,
    meta: { requiresAuth: true }, 
    children: 
    [
      {
        path: '/home', 
        name: 'home',
        component: HomeView
      },
      {
        path: '/restaurante/cadastrar',
        name: 'cadastrarRestaurante',
        component: cadastrarRestauranteView
      }, 
      {
        path: '/restaurante/listar',
        name: 'ListarRestaurantes',
        component: ListarRestaurante
      },
      {
        path: 'review/:id',
        name: 'cadastrarReview',
        component: cadastrarReviewView
      },
      {
        path: 'review/listar/:id',
        name: 'ListarReview',
        component: listarReview
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const logado = localStorage.getItem('token');

  if (to.meta.requiresAuth && !logado) {
    next('/login');
  } 
  else if (logado && (to.path === '/login' || to.path === '/')) 
  {
    next('/home');
  } 
  else 
  {
    next();
  }
});

export default router;