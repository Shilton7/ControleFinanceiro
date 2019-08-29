const restful = require('node-restful')
const mongoose = restful.mongoose

const creditoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, min: 0, required: true }
})

const debitoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true,
    enum: ['PAGO', 'PEDENTE','AGENDADO']}
})

const transacaoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    mes: { type: Number, min: 1, max: 12, required: true },
    ano: { type: Number, min: 1970, max: 2500, required: true },
    credito: [creditoSchema],
    debito: [debitoSchema]
})

module.exports = restful.model('transacao', transacaoSchema) 