import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  ativo: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const UsuarioModel=  mongoose.model("usuario", usuarioSchema);
export default UsuarioModel;