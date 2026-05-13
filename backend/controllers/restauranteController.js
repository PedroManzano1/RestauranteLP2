import restaurante from '../models/restaurante.js';
import path from 'path';
import __dirname from '../utils/pathUtils.js';
//import bcrypt from "bcrypt";
//import Usuario from "../models/Usuario.js";


class restauranteController{
static async createRestaurante(req, res) {
  let usuarioCriado = null;
  try {
    const {
      nome,
      descricao,
      categoria, 
      cnpj

    } = req.body;



        const restauranteExistente = await restaurante.findByCnpj(cnpj);
     
    
            if (restauranteExistente) {
        
                return res.status(400).json({ message: 'Restaurante já cadastrado.' });
            }

            if (!cnpj || cnpj.trim() === "") {
              return res.status(400).json({
                message: "CNPJ é obrigatório"
              });
            }
                

  
    const novoRestaurante = new restaurante( 
        nome,
        descricao,
        categoria, 
        cnpj
    );



    await novoRestaurante.save();

    return res.status(201).json({
      message: "Restaurante criado com sucesso"
    });

  } catch (error) {
    console.error("Erro ao cadastrar restaurante:", error);


    return res.status(500).json({
      erro: error.message
    });
  }
}
    static async getAllRestaurante(req, res) {
        try {
            const Restaurante = await restaurante.findAll();
            res.json(Restaurante);
        } catch (error) {
            console.error('Erro ao carregar os restaurante:', error);
            res.status(500).json({message: 'Erro interno ao buscar restaurante'})
        }
    }

   
static async updateRestaurante(req, res) {
  try {
    const { id } = req.params;

    const dados = { ...req.body };


    if (!dados.senha) {
        delete dados.senha;
    }

    await restaurante.update(id, dados);

    const restauranteAtualizado = await restaurante.findById(id);

    return res.json(restauranteAtualizado);

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar restaurante');
  }
}

static async deleteRestaurante(req, res) {
  try {
    const { id } = req.params;

    const restauranteAtualizado = await restaurante.update(id, {
      ativo: false
    });

    return res.json(restauranteAtualizado);

  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao deletar restaurante");
  }
}

} export default restauranteController;