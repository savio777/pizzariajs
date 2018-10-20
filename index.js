// carregar modulo http
const http = require('http')

//
const express = require('express')

// acessar arquivos do pc
//const fs = require('fs')

// 
//const path = require('path') 

// endereço do servidor
const hostname = 'localhost'

// porta q será usada
const port = 3000

// metodo mais rapido e melhor
// usar o modulo express (precisa de 'npm install express' na pasta do projeto)
const app = express()

const roteadorPizzas = require('./rotasPizzas.js')

app.use(express.static(__dirname + '/public'))

//interpretar requisições com json
app.use(express.json())

// usar as rotas
app.use('/pizzas', roteadorPizzas)

const servidor = http.createServer(app)

/*app.use((req, res) => {
    console.log(req.method, req.url)
})*/

// criar server metodo mais demorado
/*const servidor = http.createServer((req, res)=>{
    console.log(req.headers, req.url) 
    console.log(req.method ,req.url)

    if(req.method == 'GET'){
        let arquivoURL // criar variavel 

        if(req.url == '/'){
            arquivoURL = '/index.html'
        }else{
            arquivoURL = req.url
        }

        let caminhoURL = path.resolve('./public' + arquivoURL)
        fs.exists(caminhoURL, (existe) => {
            if(!existe){
                res.statusCode = 404 // erro
                res.setHeader('Content-Type', 'text/html')
                res.end('<h1>arquivo nao encontrado</h1>')
                return 
            }

            res.statusCode = 200 // ok
            res.setHeader('Content-Type', 'text/html')
            fs.createReadStream(caminhoURL).pipe(res)
        })
    }else{
        res.statusCode = 400  // erro
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Metodo '+req.method+' nao suportado</h1>')
    }
    // uma possibilidade de enviar html
    //res.end('<html><head><title>sou servidor kk</title></head><body><h1>iae kk</h1></body></html>')
})*/

servidor.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}`)
})
