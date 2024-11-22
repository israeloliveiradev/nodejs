// Sistema de Gestão de Biblioteca

class Livro{
    constructor(titulo, autor, ano_publicacao, disponivel = true){
        this.titulo = titulo
        this.autor = autor
        this.ano_publicacao = ano_publicacao
        this.disponivel = disponivel
    }

    emprestar(){
        if(this.disponivel){
            this.disponivel = false
            console.log(`O livro "${this.titulo}" foi emprestado.`)
        } else{
            console.log(`No momento o livro "${this.titulo} não está disponível."`)
        }
    }

    devolver(){
        if(this.disponivel === false){
            this.disponivel = true
            console.log(`O livro ${this.titulo} foi devolvido.`)
        } else{
            console.log(`O livro "${this.titulo}" já está disponível.`)
        }
    }

    exibir_informacoes(){
        console.log(`---- Informações do livro: -----`)
        console.log(` `)
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ano de publicação: ${this.ano_publicacao}`)
        console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}`);
    }
}

let livro1 = new Livro(`Entendendo algoritimos`, `Aditya Y. Bhargava`, `2015`, false)
let livro2 = new Livro(`Pai Rico, Pai Pobre`, `Robert Kyiosaki`, `1997`, true )

livro1.exibir_informacoes()
console.log(` `)
livro2.exibir_informacoes()