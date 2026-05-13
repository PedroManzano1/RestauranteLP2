import review from '../models/review.js';
import path from 'path';
import __dirname from '../utils/pathUtils.js';




class reviewController{

static async createReview(req, res) {
  console.log("Dados recebidos do Postman:", req.body);
  try {
    const {
      usuario,
      restaurante,
      nota, 
      comentario

    } = req.body;

  
    const novoReview = new review(
      usuario,
      restaurante,
      nota, 
      comentario
    );

    await novoReview.save();

    return res.status(201).json({
      message: "Review criado com sucesso"
    });

  } catch (error) {
    console.error("Erro ao cadastrar", error);

    return res.status(500).json({
      erro: error.message
    });
  }
}
    static async getAllReview(req, res) {
        try {
            const Review = await review.findAll();
            res.json(Review);
        } catch (error) {
            console.error('Erro ao carregar', error);
            res.status(500).json({message: 'Erro interno ao buscar'})
        }
    }

   
static async updateReview(req, res) {
  try {
    const { id } = req.params;

    const dados = { ...req.body };



    await review.update(id, dados);

    const reviewAtualizado = await review.findById(id);

    return res.json(reviewAtualizado);

  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar ');
  }
}

static async deleteReview(req, res) {
  try {
    const { id } = req.params;

    await review.delete(id);

    return res.json({ message: "Review deletado com sucesso" });

  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao deletar");
  }
}

} export default reviewController;