const http = require('http')

http.createServer((req, res) => {
    res.end('Hello World Sever')
}).listen(8081, ()=>{
    console.log('Servidor Rodando')
})

