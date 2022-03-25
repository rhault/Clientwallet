import dbConnect from '../../utils/dbConnect';
import Sale from '../../models/mdSales';
import Client from '../../models/mdClient';
import { Schema, models, model} from 'mongoose';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                Client.find()
                .populate("sale")
                .then(console.log)
                
                
                //res.status(200).json({ success: true, data: sales })

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}