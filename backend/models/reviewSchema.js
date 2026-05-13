import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {

    Usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            required: true,
    },
    Restaurante: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurante",
            required: true,
    },
    nota: {
        type: Number,
        default: true,
    },
    comentario: {
        type: String,
        default: true,
    },

    },
    { 
        timestamps: true,
    }
);

const ReviweModel = mongoose.model('review',reviewSchema);
export default ReviweModel;