const express = require('express')

const roteadorCombo = express.Router()

roteadorCombo.route('/')

roteadorCombo.all(function(req, res, next)  {
    res.statusCode = 200
    next()
})

roteadorCombo.get(function(req, res)  {
    res.end('enviar todos os lanches de combo')
})

roteadorCombo.post(function(req, res)  {
    res.end('adicionar lanche: ' + req.body.lanche)
})

roteadorCombo.put(function(req, res)  {
    statusCode = 403
    res.end('metodo put nao e suportado em /combo')
})

roteadorCombo.delete(function(req, res)  {
    res.end('deletar todos os combos')
})

roteadorCombo.get('/:comboId', function(req, res)  {
    res.end(`enviar combo: ${req.params.comboId}`)
})

roteadorCombo.post('/:comboId', function(req, res)  {
    res.end(`adicionar combo: ${req.params.comboId}`)
})

roteadorCombo.put('/:comboId', function(req, res)  {
    res.end(`mudar combo: ${req.params.comboId}`)
})

roteadorCombo.delete('/:comboId', function(req, res)  {
    res.end(`deletar combo: ${req.params.comboId}`)
})

module.exports = roteadorCombo