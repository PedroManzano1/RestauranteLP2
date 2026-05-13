import axios from "axios";

// Cria uma instância personalizada do axios
const api = axios.create({

  // URL base do backend
  baseURL: "http://localhost:3000",

  // Headers padrão
  headers: {
    "Content-Type": "application/json"
  }

});

// Exporta para usar em outros arquivos
export default api;