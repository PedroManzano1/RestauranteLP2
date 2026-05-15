import ReviweModel from "./reviewSchema.js";

class review{
    constructor(usuario, restaurante, nota, comentario){
        this.usuario = usuario; 
        this.restaurante = restaurante; 
        this.nota = nota; 
        this.comentario = comentario; 
    }


    async save(){
            const novoReview = new ReviweModel({
            Usuario: this.usuario,
            Restaurante: this.restaurante,
            nota: this.nota, 
            comentario: this.comentario
            });
            return await novoReview.save();
        }
    
        static async findByRestaurante(restauranteId) {
            return await ReviweModel.find({
                Restaurante: restauranteId
            });
        }

        
        static async findAll() {
            return await ReviweModel.find();
        }
    
        static async findById(id) {
            return await ReviweModel.findById(id);
        }
    
        static async update(id, dadosAtualizados) {
            return await ReviweModel.findByIdAndUpdate(id, dadosAtualizados, { new: true });
        }
    
        static async delete(id) 
        {
            return await ReviweModel.findByIdAndDelete(id);
        }
    
}export default review; 