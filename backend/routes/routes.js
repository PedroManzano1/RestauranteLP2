import express from 'express'; 
import restauranteController from '../controllers/restauranteController.js';
import { registrarCliente } from '../controllers/usuarioController.js';
import { login } from '../controllers/usuarioController.js';
import reviewController from '../controllers/reviewController.js';


const router = express.Router();

router.post('/restaurante', restauranteController.createRestaurante);
router.get('/restaurante', restauranteController.getAllRestaurante);
router.put('/restaurante/:id', restauranteController.updateRestaurante);
router.delete('/restaurante/:id',restauranteController.deleteRestaurante);


router.post('/clientes',registrarCliente);
router.post('/login',login);


router.post('/review', reviewController.createReview);
router.get('/review', reviewController.getAllReview);
router.put('/review/:id', reviewController.updateReview);
router.delete('/review/:id',reviewController.deleteReview);


export default router; 