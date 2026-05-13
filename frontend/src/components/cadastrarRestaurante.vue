
<template>
  <div class="cadastrar-restaurante">
    <form @submit.prevent="cadastrarRestaurante">
      <label for="placa">Nome:</label>
      <input type="text" id="nome" v-model="restaurante.nome" required />
      
      <label for="modelo">Descrição:</label>
      <input type="text" id="descricao" v-model="restaurante.descricao" required />

     <label>Categoria:</label>
    <select v-model="restaurante.categoria">
        <option value="JAPONES">Japonês</option>
        <option value="PIZZA">Pizza</option>
        <option value="HAMBURGUER">Hambúrguer</option>
        <option value="CHURRASCARIA">Churrascaria</option>
        <option value="ITALIANO">Italiano</option>
    </select>
        
      <label for="preco">CNPJ:</label>
      <input type="text" id="cnpj" v-model="restaurante.cnpj" required />

      <button type="submit">Cadastrar</button>
    </form>
    <div v-if="mensagem" class="mensagem">{{ mensagem }}</div>
  </div>
</template>


<script>
import restauranteService from '@/service/restauranteService';

export default {

  name: "CadastrarRestaurante",

  data() {

    return {

      restaurante: {
        nome: "",
        descricao: "",
        categoria: "",
        cnpj: "",
      },

      mensagem: "",

    };

  },

  methods: {

    async cadastrarRestaurante() {

    if (!this.restaurante.cnpj || this.restaurante.cnpj.trim() === "") {
        this.mensagem = "CNPJ é obrigatório";
        return;
    }


      try {

        await restauranteService.cadastrar(
          this.restaurante
        );

        this.mensagem =
          "Restaurante cadastrado com sucesso!";

        this.restaurante = {
          nome: "",
          descricao: "",
          categoria: "",
          cnpj: "",
        };

      } catch(error) {

        this.mensagem =
          "Erro ao cadastrar restaurante";

        console.log(error);

      }

    }

  }

};
</script>

<style scoped>
/* Fundo geral */
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #141e30, #243b55);
  min-height: 100vh;
}

/* Container principal */
.cadastrar-restaurante {
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

/* Formulário */
form {
  width: 100%;
  max-width: 420px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(12px);

  padding: 40px;

  border-radius: 24px;

  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;

  gap: 14px;

  border: 1px solid rgba(255,255,255,0.1);
}

/* Título */
h2 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

/* Labels */
label {
  color: #f1f1f1;
  font-size: 14px;
  font-weight: 500;
}

/* Inputs e Select */
input,
select {
  padding: 14px;

  border: none;

  border-radius: 12px;

  outline: none;

  background: rgba(255,255,255,0.12);

  color: white;

  font-size: 15px;

  transition: 0.3s;
}

/* Placeholder */
input::placeholder {
  color: #d6d6d6;
}

/* Focus */
input:focus,
select:focus {
  background: rgba(255,255,255,0.18);

  box-shadow:
    0 0 0 3px rgba(76, 175, 255, 0.3);
}

/* Options do select */
option {
  color: black;
}

/* Botão */
button {
  margin-top: 10px;

  padding: 14px;

  border: none;

  border-radius: 14px;

  background: linear-gradient(
    135deg,
    #00c6ff,
    #0072ff
  );

  color: white;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;
}

/* Hover botão */
button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 8px 20px rgba(0, 114, 255, 0.4);
}

/* Mensagem */
.mensagem {
  margin-top: 15px;

  text-align: center;

  color: #7CFFB2;

  font-weight: bold;
}

</style>