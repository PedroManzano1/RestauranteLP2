
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import usuario from "../models/usuario.js";

export const registrarCliente = async (req, res) => {
  let usuarioCriado = null; 

  try {
    const { email, senha, ...dadosCliente } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: "Email e senha são obrigatórios" });
    }

    const usuarioExistente = await usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ erro: "Email já cadastrado" });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    usuarioCriado = await usuario.create({
      email,
      senha: senhaHash,
        ...dadosCliente
    });

    return res.status(201).json({ usuario: usuarioCriado });

  } catch (err) {
    console.error("Erro no registro de cliente:", err);
    return res.status(500).json({ erro: "Erro ao registrar cliente: " + err.message });
  }
};



export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const Usuario = await usuario.findOne({ email });

    if (!Usuario) {
      return res.status(400).json({ erro: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, Usuario.senha);

    if (!senhaValida) {
      return res.status(400).json({ erro: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: Usuario._id},
      "segredo",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      email: Usuario.email,
    });

  } catch (err) {
     console.error("ERRO LOGIN:", err);
    res.status(500).json({ erro: "Erro no login" });
  }
};