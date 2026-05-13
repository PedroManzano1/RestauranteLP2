import RestauranteModel from "./restauranteSchema.js";

class restaurante{

    constructor(nome, descricao, categoria, cnpj){
        this.nome = nome; 
        this.descricao = descricao; 
        this.categoria = categoria; 
        this.cnpj = cnpj;
    }
  
    async save(){
        const novoRestaurante = new RestauranteModel({
        nome: this.nome,
        descricao: this.descricao,
        categoria: this.categoria, 
        cnpj: this.cnpj
        });
        return await novoRestaurante.save();
    }
 
    static async findAll() {
        return await RestauranteModel.find();
    }

    static async findById(id) {
        return await RestauranteModel.findById(id);
    }

    static async update(id, dadosAtualizados) {
        return await RestauranteModel.findByIdAndUpdate(id, dadosAtualizados, { new: true });
    }

    static async delete(id) 
    {
        return await RestauranteModel.findByIdAndDelete(id);
    }

    static async findByCnpj(cnpj) {
        return await RestauranteModel.findOne({ cnpj: cnpj });
    }

}export default restaurante; 