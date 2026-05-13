<template>
  <div class="form-container">
    <h2>Criar Conta</h2>
    <form @submit.prevent="cadastrar">
      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" v-model="novoUsuario.nome" required />

      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="novoUsuario.email" required />

      <label for="senha">Senha:</label>
      <input type="password" id="senha" v-model="novoUsuario.senha" required />

      <label for="telefone">Telefone:</label>
      <input type="text" id="telefone" v-model="novoUsuario.telefone" required />

      <button type="submit">Cadastrar</button>
    </form>
    <p v-if="mensagem" :class="{'sucesso': sucesso, 'erro': !sucesso}">{{ mensagem }}</p>
    <p>Já tem conta? <router-link to="/login">Faça login</router-link></p>
  </div>
</template>

<script>
import usuarioService from '../service/usuarioService';

export default {
  name: 'CadastrarUsuario',
  data() {
    return {
      novoUsuario: {
        nome: '',
        email: '',
        senha: '',
        telefone: ''
      },
      mensagem: '',
      sucesso: false
    };
  },
  methods: {
    async cadastrar() {
      try {
        await usuarioService.cadastrar(this.novoUsuario);
        this.sucesso = true;
        this.mensagem = 'Cadastro realizado com sucesso! Vá para o login.';
        // Limpa o formulário
        this.novoUsuario = { nome: '', email: '', senha: '', telefone: '' };
      } catch (error) {
        this.sucesso = false;
        this.mensagem = 'Erro ao criar conta: ' + (error.response?.data?.erro || error.message);
      }
    }
  }
};
</script>

<style scoped>
.form-container { max-width: 400px; margin: 0 auto; padding: 20px; }
input { display: block; width: 100%; margin-bottom: 15px; padding: 8px; }
.sucesso { color: green; }
.erro { color: red; }
</style>