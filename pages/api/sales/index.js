import dbConnect from '../../../utils/dbConnect';
import Sale from '../../../models/mdSales';
import Client from '../../../models/mdClient';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const sales = await Sale.find({});
                res.status(200).json({ success: true, data: sales })

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const newSales = await Sale.create(req.body);
                await newSales.save()

                const idClient = await Client.findById(req.body.cliente)
                idClient.sales.push(newSales._id)
                idClient.save()
                res.status(201).json({ success: true, data: newSales }) 
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}