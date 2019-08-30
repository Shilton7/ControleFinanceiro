import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    dashboard: () => ({ sumario: {credito:70, debito: 20 }})
})

export default rootReducer