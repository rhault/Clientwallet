import { Schema, models, model } from 'mongoose';

const clientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        maxlength: [40, 'The name cannot be more than 40 characters']
    },
    adress: {
        type: String,
        required: true,
        maxlength: [200]
    }
})

export default models.Client || model('Client', clientSchema);