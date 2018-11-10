const express = require('express')

const roteadorPizzas = express.Router()

// isso dá erro quando utiliza id para rotas especificas
//roteadorPizzas.route('/')  

// usando o function para não necessitar usar callback com funções lambda
.all('/', (req, res, next) => {
    res.statusCode = 200  // ok
    next()
})

// receber  
.get('/',(req, res) => {
    res.end('Enviando todas pizzas')   // para teste
    
})

// criação
.post('/',(req, res) => {
    res.end(`adicionar novo sabor: ${req.body.sabor}\n
    adicionar descricao: ${req.body.descricao}`)
})

.put('/',(req, res) => {
    res.statusCode = 403  // erro
    res.end(`metodo put nao e suportado em /pizzas`)
})

.delete('/',(req, res) => {
    res.end('deletar todos os sabores de pizza')
})

// para os especificos novo route com endereço

// get em pizza especifica
.get('/:pizzaId', (req, res) => {
    res.end('enviando pizzas com sabor ' + req.params.pizzaId)
})

.post('/:pizzaId', (req, res) => {
    res.statusCode = 403
    res.end('metodo post nao e suportado em /pizzas/' + req.params.pizzaId)
})

.put('/:pizzaId', (req, res) => {
    res.end(`adicionando no sabor ${req.params.pizzaId}: ${req.body.sabor}\n
    detalhes do sabor: ${req.body.descricao}`)
})

.delete('/:pizzaId', (req, res) => {
    res.end('deletando o sabor: ' + req.params.pizzaId)
})

// exportar o roteador pizzas
module.exports = roteadorPizzas