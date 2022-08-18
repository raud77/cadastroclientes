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

const funcionarios = [
    {id: 1,nome: "Raudney",cpf: "096.104.2204-43"},
    {id: 2,nome: "Paulo",cpf: "096.104.2204-42"}
]
   //consultar todos  funcionarios
    app.get('/funcionarios', (req,res) =>{
        res.status(200).json(funcionarios)
           
})
// cadastrar novo funcionario
    app.post('/funcionarios',(req,res)=>{
        funcionarios.push(req.body)
        res.status(200).send("Funcionarios cadastrado com sucesso!")

    })

    

export default app


