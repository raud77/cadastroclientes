import express from 'express';

const app = express();
app.use(express.json());
const clientes = [
    {id: 1,nome: "Raudney",cpf: "096.104.2204-43"},
    {id: 2,nome: "Paulo",cpf: "096.104.2204-42"}
]
//rota principal
app.get('/',(req,res)=>{
    res.status(200).send("Pagina Inicial")
  
})   
   //consultar todos  clientes
    app.get('/clientes', (req,res) =>{
        res.status(200).json(clientes)
           
})
// cadastrar novo cliente
    app.post('/clientes',(req,res)=>{
        clientes.push(req.body)
        res.status(200).send("Cliente cadastrado com suceso!")

  })
  // funçaõ que realiza a buscar por id
  function buscarCliente(id){
    return clientes.findIndex(cliente => cliente.id == id)

  }

  //consulta cliente por id
  app.get('/clientes/:id',(req,res) =>{
    let index = buscarCliente(req.params.id)
    res.json(clientes[index])
  })
  //atualizar cliente por id
  app.put('/clientes/:id',(req,res) => {
    let index = buscarCliente(req.params.id)
    clientes[index] = req.body
    res.json(clientes)

  })
//Excluir cliente por id
app.delete('/clientes/:id',(req,res) =>{
    let index = buscarCliente(req.params.id)
    clientes.splice(index,1)
    res.send("Cliente excluido com sucessso!")
})

export default app


