<template>
  <div class="layout-container">
    <nav>
      <div class="links">
        <router-link to="/home">Home</router-link> |
        <router-link to="/restaurante/cadastrar">Novo Restaurante</router-link>
        <!-- Botão de Sair -->
        <button @click="logout" class="btn-sair">Sair</button>   
    </div>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default 
{
  name: 'MainLayout',
  methods: 
  {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #4e9e47;
}

/* Container da navegação para alinhar o botão à direita */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn-sair {
  background-color: #ff4d4d; /* Vermelho vibrante */
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 2px 5px rgba(255, 77, 77, 0.2);
}

.btn-sair:hover {
  background-color: #ff3333; /* Vermelho um pouco mais escuro no hover */
  transform: translateY(-1px); /* Efeito de levante suave */
  box-shadow: 0 4px 8px rgba(255, 77, 77, 0.3);
}

.btn-sair:active {
  transform: translateY(0); /* Volta ao normal quando clica */
  background-color: #e60000;
}
</style>