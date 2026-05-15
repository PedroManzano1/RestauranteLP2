<template>
  <div class="lista-restaurantes">

    <h1>Restaurantes</h1>

    <div
      class="card"
      v-for="restaurante in restaurantes"
      :key="restaurante._id"
    >

      <h2>{{ restaurante.nome }}</h2>
      <p>{{ restaurante.descricao }}</p>
      <p>{{ restaurante.cnpj }}</p>
      <span>{{ restaurante.categoria }}</span>

      <button @click="abrirReview(restaurante._id)">
        Avaliar Restaurante
      </button>

      <button @click="abrirListaReview(restaurante._id)">
        Abrir Avaliações 
      </button>

    </div>

  </div>
</template>

<script>

import restauranteService from '@/service/restauranteService.js';

export default {
  name: "ListarRestaurantes",
  data() {
    return {
      restaurantes: []
    }
  },
  methods: {
    async carregarRestaurantes() {
      try {
        const response =
          await restauranteService.listar();
        this.restaurantes =
          response.data;
      } catch(error) {
        console.log(error);
      }
    },
    abrirReview(id) {
        this.$router.push(`/app/review/${id}`);
    }, 
    abrirListaReview(id) {
        this.$router.push(`/app/review/listar/${id}`);
    }
  },
  mounted() {
    this.carregarRestaurantes();
  }

}
</script>

<style scoped>

.lista-restaurantes {

  padding: 40px;

  display: flex;

  flex-direction: column;

  gap: 20px;

}

.card {

  background: #ffffff;

  padding: 20px;

  border-radius: 16px;

  box-shadow:
    0 4px 10px rgba(0,0,0,0.1);

}

h2 {

  margin-bottom: 10px;

}

p {

  margin-bottom: 10px;

}

span {

  display: inline-block;

  margin-bottom: 15px;

  font-weight: bold;

  color: #555;

}

button {

  padding: 10px 16px;

  border: none;

  border-radius: 10px;

  background: #007bff;

  color: white;

  cursor: pointer;

}

button:hover {

  opacity: 0.9;

}

</style> 