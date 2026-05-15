<template>

  <div class="container">

    <h1>Cadastrar Restaurante</h1>

    <CadastrarRestaurante />

  </div>

</template>

<script>

import CadastrarRestaurante from '@/components/Restaurante/cadastrarRestaurante.vue';

export default {

  name: 'CadastrarRestauranteView',

  components: {
    CadastrarRestaurante
  }

}

</script> 