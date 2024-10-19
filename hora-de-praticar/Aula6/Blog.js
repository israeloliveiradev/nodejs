const express = require('express');

const app = express();

const blog = [
    { id: 1, autor: "Israel", titulo: "titulo teste 1", conteudo: "postagem teste 1" },
    { id: 3, autor: "Jorge", titulo: "titulo teste 3", conteudo: "postagem teste 3" },
    { id: 2, autor: "Sheila", titulo: "titulo teste 2", conteudo: "postagem teste 2" },
    { id: 5, autor: "Rebeca", titulo: "titulo teste 5", conteudo: "postagem teste 5" },
    { id: 6, autor: "Albertina", titulo: "titulo teste 6", conteudo: "postagem teste 6" },
    { id: 7, autor: "Arlindo", titulo: "titulo teste 7", conteudo: "postagem teste 7" },
    { id: 8, autor: "Cruz", titulo: "titulo teste 8", conteudo: "postagem teste 8" },
    { id: 9, autor: "Function", titulo: "titulo teste 9", conteudo: "postagem teste 9" }
];

app.get("/blog", (req, res) => {
    const lista = blog.map(post => ({
        id: post.id,
        titulo: post.titulo
    }));
    res.json(lista);
});

app.get("/blog/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blog.find(p => p.id === postId);

    if (post) {
        res.send("Página de Usuário" + 
        "<br>Id: " + post.id + 
        "<br>Autor: " + post.autor +
        "<br>Titulo: " + post.titulo + 
        "<br>Conteúdo: " + post.conteudo);
    } else {
        res.status(404).send("Post não encontrado");
    }
});

app.listen(8082, () => {
    console.log("Servidor rodando em http://localhost:8082");
});
