import api from '../api'; 

export default {
  login(credenciais) 
  {
    return api.post('/login', credenciais);
  },
  cadastrar(dadosCliente) 
  {
    return api.post('/clientes', dadosCliente);
  }
};