import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import cadastrarRestauranteView
from '../view/cadastrarRestauranteView.vue'

const routes = [

  {
    path: '/restaurante/cadastrar',
    name: 'cadastrarRestaurante',
    component: cadastrarRestauranteView
  }

]

const router = createRouter({

  history: createWebHashHistory(),

  routes

})

export default router