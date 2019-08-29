const transacao = require('./transacao')
const erros = require('../util/Errors')

transacao.methods(['get','post','put','delete'])

//retornar objeto atualizando após o update e valida os campos do required
transacao.updateOptions({new: true, runValidators: true })

//validação de mensagens de erro
transacao.after('post', erros).after('put', erros)

transacao.route('count', (req,res,next) => {
    transacao.count((error, value ) => {
        if(error){
            res.status(500).json({erros: [error]})
        }else{
            res.json(value)
        }
    })
})

transacao.route('sumario', (req, res, next) => {
    transacao.aggregate([{
        $project: { credito: { $sum: "$credito.valor" }, debito: { $sum: "$debito.valor" } }
    }, {
            $group: { _id: null, credito: { $sum: "$credito" }, debito: { $sum: "$debito" } }
    }, {
            $project: { _id: 0, credito: 1, debito: 1 }
    }], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(result[0] || { credito: 0, debito: 0 })
        }
    })
})

module.exports = transacao