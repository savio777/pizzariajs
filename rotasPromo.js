const express = require('express')

const roteadorPromo = express.Router()

roteadorPromo.route('/')

roteadorPromo.all(function(req, res, next) {
    res.statusCode = 200
    next()
})

roteadorPromo.get(function(req, res)  {
    res.end('pizzas com promocao')
})

roteadorPromo.post(function(req, res)  {
    res.end(`adicionar promocao em pizzas com sabor: ${req.body.sabor}`)
})


roteadorPromo.put(function(req, res)  {
    res.end('atualizar promocoes')
})

roteadorPromo.delete(function(req, res)  {
    res.end('deletar todas promocoes')
})

roteadorPromo.get('/:promoId', function(req, res)  {
    res.end(`promocao em pizzas com sabor: ${req.params.promoId}`)
})

roteadorPromo.post('/:promoId', function(req, res)  {
    res.end(`criar promocao em pizza com sabor: ${req.params.promoId}`)
})

roteadorPromo.put('/:promoId', function(res, req)  {
    res.end(`atualizar promocoes em pizzas com sabor: ${req.params.promoId}`)
})

roteadorPromo.delete('/:promoId', function(req, res)  {
    res.end(`apagar a promocao no sabor: ${req.params.promoId}`)
})

module.exports = roteadorPromo