import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import TransacaoReducer from '../transacao/transacaoReducer'

const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tab: TabReducer,
    transacao: TransacaoReducer,
    form: formReducer
})

export default rootReducer
