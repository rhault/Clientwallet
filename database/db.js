import {clients} from './data'

class Database {
    constructor(){}

    getAll = async () =>  {
        const asArray = Object.values(clients)
        return asArray
    }
    
    getById = async (id) => {
        if (!Object.prototype.hasOwnProperty.call(clients, id)) {
            return null
        }
        const entry = clients[id]
        return entry
    }
}

export default Database