import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'
import App from './app'

import DashboardRedux from '../dashboard/dashboard'
import DashboardSemRedux from '../dashboardSemRedux/dashboardSemRedux'
import Transacao from '../transacao/transacao'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={DashboardSemRedux}/>
            <Route path='dashboardredux' component={DashboardRedux} />
            <Route path='dashboardsemredux' component={DashboardSemRedux} />
            <Route path='transacao' component={Transacao} />
        </Route>

        <Redirect from='*' to='/dashboardsemredux'/>
        
    </Router>
)