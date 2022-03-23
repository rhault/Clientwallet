import dbConnect from '../../../utils/dbConnect';
import Client from '../../../models/mdClient';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const clients = await Client.find({});
                res.status(200).json({ success: true, data: clients })

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const clients = await Client.create(req.body);
                res.status(201).json({ success: true, data: clients })

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}