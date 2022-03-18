const fs = require('fs');
fs.readFile('clientsDB.json', (err, clientsDB) => {
    fs.readFile('vendasDB.json', (err, vendasDB) => {
        if (err) throw err;
        let clients = JSON.parse(clientsDB);
        let vendas = JSON.parse(vendasDB);
    
        for (let i=0; i < clients.sic.length; i++) {
    
            let newClient = []
        
            let ArrFilter = vendas.vendas.filter((venda) => {
                return venda.nome == clients.sic[i].nome 
            })    
        
            ArrFilter.forEach((event) => {
                newClient.push({
                    data: event.data,
                    produto: event.produto,
                    quantidade: event.quantidade,
                    totvenda: event.totvenda,
                    pedido: event.pedido,
                    lucro: event.lucro
                })   
            })
            
            clients.sic[i].compras = newClient
        }   

        let newClient = JSON.stringify(clients)
        fs.writeFileSync('newBD.json', newClient);
    })
})