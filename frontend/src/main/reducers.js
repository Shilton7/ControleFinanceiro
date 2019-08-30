import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import TransacaoReducer from '../transacao/transacaoReducer'

const rootReducer = combineReducers ({
    dashboard: DashboardReducer,
    tab: TabReducer,
    transacao: TransacaoReducer
})

export default rootReducer
