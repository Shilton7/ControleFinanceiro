const INITIAL_STATE = { list: [] }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'transacao_fetched':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}