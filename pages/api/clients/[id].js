import Database from '../../../database/db'

const haddler = async (req, res) => {
    const db = new Database()
    const clientId = req.query.id
    const clients = await db.getById(clientId)
    const length = clients.length
    
    res.status(200).json({data:clients, length})
}

export default haddler