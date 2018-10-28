// carregar modulo http para facilitar o uso de protocolos e funções
const http = require('http')

// usar o modulo express (precisa de 'npm install express' na pasta do projeto)
// carregar modulo express para fazer aplicativo web para nodejs
const express = require('express')

// endereço do servidor
const hostname = 'localhost'

// porta q será usada
const port = 3000

const app = express()

const servidor = http.createServer(app)

// usar rotas
const roteadorPizzas = require('./rotasPizzas.js')

const roteadorPromo = require('./rotasPromo.js')

const roteadorCombo = require('./rotasCombo.js')
 
app.use(express.static(__dirname + '/public'))

//interpretar requisições com json
app.use(express.json())

// usar as rotas
app.use('/pizzas', roteadorPizzas)

app.use('/promo', roteadorPromo)

app.use('/combo', roteadorCombo)

servidor.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}`)
})

// para teste, mostrar as requisições
app.use((req, res) => {
    console.log(req.method, req.url)
})