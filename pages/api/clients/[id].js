import dbConnect from '../../../utils/dbConnect';
import Client from '../../../models/mdClient';

dbConnect();

export default async (req, res) => {
    const { query: { id }, method, body } = req;

    switch (method) {
        case 'GET':
            try {
                const idClient = await Client.findById(id);

                if (!idClient) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: idClient });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const updateClient = await Client.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!updateClient) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: updateClient });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedClient = await Client.deleteOne({ _id: id });

                if (!deletedClient) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}