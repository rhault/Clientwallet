import { Schema, models, model} from 'mongoose';

const saleSchema = new Schema(
    {
        data: {type: String},	
        categoria: {type: String},		
        produto: {type: String},		
        quantidade: {type: String},		
        totvenda: {type: String},	
        pedido: {type: String},		
        lucro: {type: String},	
        cliente: {
            type: Schema.ObjectId, ref:"Client"
        }	
    },
    {
        timestamps:true
    }
)

export default models.Sale || model('Sale', saleSchema);