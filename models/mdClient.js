import { Schema, models, model } from 'mongoose';

const clientSchema = new Schema({
    controle: {type: String, unique:true},	
    codigo: {type: String},	
    nome: {type: String},		
    endereco: {type: String},		
    endnumero: {type: String},		
    endcomplemento: {type: String},		
    bairro: {type: String},	
    cidade: {type: String},		
    estado: {type: String},		
    cep: {type: String},		
    telefone: {type: String},	
    celular: {type: String},	
    data: {type: String},
    lktipo: {type: String},	
    email: {type: String},	
    cgc: {type: String},	
    nascimento: {type: String},	
    profissao: {type: String}	
})

export default models.Client || model('Client', clientSchema);