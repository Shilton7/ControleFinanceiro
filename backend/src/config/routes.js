const express = require('express')

module.exports = function (server){

const router = express.Router()
server.use('/api/v1', router)

const transacao = require('../api/transacao/transacaoService')
      transacao.register(router, '/transacao')
}