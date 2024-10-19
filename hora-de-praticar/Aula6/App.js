const express = require('express')
 
const app = express()

const user = [
    { id: 1, nome: "Israel"} ,
    {id: 2, nome: "Carlos"} 
]


app.get("/bemvindo", (req, res) => {
    res.send("Olá, Israel! Seja Bem Vindo")
})

app.get("/login", (req, res) => {
    res.send("Página de Login")
})

app.get("/user/:id/:nome", (req, res) => {
    res.send("Página  de Usuário" + 
    "<br>Id: " + req.params.id + 
    "<br>Nome " + req.params.nome)
})

app.listen(8082, () => {
    console.log("Servidor rodando em http://localhost:8082")
})