const express = require('express')

const roteadorCombo = express.Router()

roteadorCombo.route('/')

.all((req, res, next) => {
    res.statusCode = 200
    next()
})

.get((req, res) => {
    res.end('enviar todos os lanches de combo')
})

.post((req, res) => {
    res.end('adicionar lanche: ' + req.body.lanche)
})

.put((req, res) => {
    statusCode = 403
    res.end('metodo put nao e suportado em /combo')
})

.delete((req, res) => {
    res.end('deletar todos os combos')
})

.get('/:comboId', (req, res) => {
    res.end(`enviar combo: ${req.params.comboId}`)
})

.post('/:comboId', (req, res) => {
    res.end(`adicionar combo: ${req.params.comboId}`)
})

.put('/:comboId', (req, res) => {
    res.end(`mudar combo: ${req.params.comboId}`)
})

.delete('/:comboId', (req, res) => {
    res.end(`deletar combo: ${req.params.comboId}`)
})

module.exports = roteadorCombo