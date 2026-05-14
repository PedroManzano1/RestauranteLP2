import mongoose from "mongoose";

const restauranteSchema = new mongoose.Schema(
    {

        nome: {
            type: String,
            required: true,
            unique: true,
        },
        descricao: {
            type: String,
            required: true,
        },
        categoria: {
            type: String,
            enum: ["JAPONES", "PIZZA","HAMBURGUER", "CHURRASCARIA", "ITALIANO"],
            required: true,
        },
        cnpj: {
            type: String,
            required: true,
            unique: true,
        },

    },
    { 
        timestamps: true,
    }
);

const RestauranteModel = mongoose.model('restaurante',restauranteSchema);
export default RestauranteModel;