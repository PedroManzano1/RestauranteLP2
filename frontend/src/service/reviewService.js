import api from "@/api";


export default {
  listar() {
    return api.get("/review");
  },

  cadastrar(restaurante) {
    return api.post("/review", restaurante);
  },

  excluir(id) {
    return api.delete(`/review/${id}`);
  },

  editar(id, restaurante) {
    return api.put(`/review/${id}`, restaurante);
  }, 

  buscarRestaurante(id){
      return api.get(`/review/restaurante/${id}`)
  }
};