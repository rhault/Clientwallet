const fs = require('fs');


fs.readFile('client.json', (err, data) => {
    fs.readFile('vendas.json', (err, entry) => {
        if (err) throw err;
        let clients = JSON.parse(data);
        let vendas = JSON.parse(entry);
        //clients.sic[0].compras = []
    
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






/* 
 
console.log(client[0].compras)
console.log(client[1].compras) */