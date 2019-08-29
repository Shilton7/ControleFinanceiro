const transacao = require('./transacao')

transacao.methods(['get','post','put','delete'])

//retornar objeto atualizando após o update e valida os campos do required
transacao.updateOptions({new: true, runValidators: true })

module.exports = transacao