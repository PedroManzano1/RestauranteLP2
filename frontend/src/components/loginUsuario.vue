<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="fazerLogin">
      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="usuario.email" required />

      <label for="senha">Senha:</label>
      <input type="password" id="senha" v-model="usuario.senha" required />

      <button type="submit">Entrar</button>
    </form>
    <p v-if="mensagemErro" class="erro">{{ mensagemErro }}</p>
    <p>Não tem conta? <router-link to="/cadastrar-usuario">Cadastre-se aqui</router-link></p>
  </div>
</template>

<script>
import usuarioService from '../service/usuarioService';

export default {
  name: 'LoginUsuario',
  data() {
    return {
      usuario: {
        email: '',
        senha: ''
      },
      mensagemErro: ''
    };
  },
  methods: {
    async fazerLogin() {
      try {
        const response = await usuarioService.login(this.usuario);
        // Salva o token gerado pelo seu backend no navegador
        localStorage.setItem('token', response.data.token); 
        // Redireciona para a página inicial (ajuste a rota conforme precisar)
        this.$router.push('/home'); 
      } catch (error) {
        this.mensagemErro = 'Erro ao fazer login. Verifique suas credenciais.';
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
/* Adicione seu CSS aqui. Exemplo básico: */
.form-container { max-width: 400px; margin: 0 auto; padding: 20px; }
input { display: block; width: 100%; margin-bottom: 15px; padding: 8px; }
.erro { color: red; }
</style>