const transacao = require('./transacao')

transacao.methods(['get','post','put','delete'])

//retornar objeto atualizando após o update e valida os campos do required
transacao.updateOptions({new: true, runValidators: true })

transacao.route('count', (req,res,next) => {
    transacao.count((error, value ) => {
        if(error){
            res.status(500).json({erros: [error]})
        }else{
            res.json(value)
        }
    })
})

module.exports = transacao