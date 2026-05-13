<template>
  <div class="login-view">
    <LoginUsuario />
  </div>
</template>

<script>
import LoginUsuario from '../components/loginUsuario.vue';

export default {
  name: 'LoginView',
  components: {
    LoginUsuario
  }
};
</script>