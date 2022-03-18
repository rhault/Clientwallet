import Database from '../../../database/db'

const haddler = async (req, res) => {
    const db = new Database()
    const clients = await db.getAll()
    const length = clients.length
    
    res.status(200).json({data:clients, length})
}

export default haddler