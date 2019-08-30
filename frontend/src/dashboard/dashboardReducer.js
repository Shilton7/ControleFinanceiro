const state_inicial = { sumario: { credito: 0, debito: 0 } }

export default function (state = state_inicial, action) {
    switch (action.type) {
        case 'transacao_sumario_fetched':
            return {...state, sumario: action.payload.data }
        default:
            return state
    }
}