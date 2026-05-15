<template>
  <div class="cadastrar-review">
    <form @submit.prevent="cadastrarReview">  
      <label for="modelo">Nota:</label>
      <input placeholder="Digite uma nota de 0 a 10" type="text" id="nota" v-model="review.nota" required />
      <input placeholder="Digite aqui seu comentario" type="text" id="comentario" v-model="review.comentario" required />
      <button type="submit">Enviar comentario</button>
    </form>
    <div v-if="mensagem" class="mensagem">{{ mensagem }}</div>
  </div>
</template>


<script>

import reviewService from '@/service/reviewService';

export default {

  name: "CadastrarReview",

  data() {

    return {
      review: {
        nota: "",
        comentario: "",
        restaurante: "",
        usuario: ""
      },
      mensagem: ""
    }

  },

  mounted() {

    const usuario =
      JSON.parse(localStorage.getItem("usuario"));

    this.review.usuario =
      usuario._id;

    this.review.restaurante =
      this.$route.params.id;

        console.log(usuario);

  console.log(this.$route.params.id);


  },

  methods: {

    async cadastrarReview() {

      try {
        await reviewService.cadastrar(
          this.review
        );

        this.mensagem =
          "Review cadastrada com sucesso!";

      } catch(error) {

        console.log(error);

        this.mensagem =
          "Erro ao cadastrar review";

      }

    }

  }

}

</script>