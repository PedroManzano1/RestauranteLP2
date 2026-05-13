import { createRouter, createWebHashHistory } from 'vue-router'

import MainLayout from '../components/MainLayout.vue';
import HomeView from '../view/HomeView.vue';
import LoginView from '../view/loginUsuarioView.vue';
import CadastrarUsuarioView from '../view/cadastrarUsuarioView.vue';
import cadastrarRestauranteView from '../view/cadastrarRestauranteView.vue';

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