<template>
  <div class="cadastro-view">
    <CadastrarUsuario />
  </div>
</template>

<script>
import CadastrarUsuario from '@/components/Usuario/cadastrarUsuario.vue';

export default {
  name: 'CadastrarUsuarioView',
  components: {
    CadastrarUsuario
  }
};
</script>