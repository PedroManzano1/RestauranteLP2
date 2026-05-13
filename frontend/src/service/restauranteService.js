import api from "../api";

export default {
  listar() {
    return api.get("/restaurante");
  },

  cadastrar(restaurante) {
    return api.post("/restaurante", restaurante);
  },

  excluir(id) {
    return api.delete(`/restaurante/${id}`);
  },

  editar(id, restaurante) {
    return api.put(`/restaurante/${id}`, restaurante);
  }
};