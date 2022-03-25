import dbConnect from '../../../utils/dbConnect';
import Sale from '../../../models/mdSales';

dbConnect();

export default async (req, res) => {
    const { query: { id }, method } = req;

    switch (method) {
        case 'GET':
            try {
                const sale = await Sale.findById(id);

                if (!sale) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: sale });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const sale = await Sale.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!sale) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: sale });

            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedSale = await Sale.deleteOne({ _id: id });

                if (!deletedSale) {
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