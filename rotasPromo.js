const express = require('express')

const roteadorPromo = express.Router()

roteadorPromo.route('/')

.all((req, res, next) => {
    res.statusCode = 200
    next()
})

.get((req, res) => {
    res.end('pizzas com promocao')
})

.post((req, res) => {
    res.end(`adicionar promocao em pizzas com sabor: ${req.body.sabor}`)
})


.put((req, res) => {
    res.end('atualizar promocoes')
})

.delete((req, res) => {
    res.end('deletar todas promocoes')
})

.get('/:promoId', (req, res) => {
    res.end(`promocao em pizzas com sabor: ${req.params.promoId}`)
})

.post('/:promoId', (req, res) => {
    res.end(`criar promocao em pizza com sabor: ${req.params.promoId}`)
})

.put('/:promoId', (res, req) => {
    res.end(`atualizar promocoes em pizzas com sabor: ${req.params.promoId}`)
})

.delete('/:promoId', (req, res) => {
    res.end(`apagar a promocao no sabor: ${req.params.promoId}`)
})

module.exports = roteadorPromo