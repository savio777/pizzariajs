const express = require('express')

const roteadorPizzas = express.Router()

roteadorPizzas.route('/')

// usando o function para não necessitar usar callback com funções lambda
roteadorPizzas.all(function(req, res, next) {
    res.statusCode = 200  // ok
    next()
})

// receber  
roteadorPizzas.get(function(req, res, next)  {
    res.end('Enviando todas pizzas')   // para teste
    next()
})

// criação
roteadorPizzas.post(function(req, res, next)  {
    res.end(`adicionar novo sabor: ${req.body.sabor}\n
    adicionar descricao: ${req.body.descricao}`)
    next()
})

roteadorPizzas.put(function(req, res, next)  {
    res.statusCode = 403  // erro
    res.end(`metodo put nao e suportado em /pizzas`)
    next()
})

roteadorPizzas.delete(function(req, res, next) {
    res.end('deletar todos os sabores de pizza')
    next()
})

// para os especificos novo route com endereço

// get em pizza especifica
roteadorPizzas.get('/:pizzaId', function(req, res, next)  {
    res.end('enviando pizzas com sabor ' + req.params.pizzaId)
    next()
})

roteadorPizzas.post('/:pizzaId', function(req, res, next)  {
    res.statusCode = 403
    res.end('metodo post nao e suportado em /pizzas/' + req.params.pizzaId)
    next()
})

roteadorPizzas.put('/:pizzaId', function(req, res, next)  {
    res.end(`adicionando no sabor ${req.params.pizzaId}: ${req.body.sabor}\n
    detalhes do sabor: ${req.body.descricao}`)
    next()
})

roteadorPizzas.delete('/:pizzaId', function(req, res, next)  {
    res.end('deletando o sabor: ' + req.params.pizzaId)
    next()
})

// exportar o roteador pizzas
module.exports = roteadorPizzas