import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import DashboardRedux from '../dashboard/dashboard'
import DashboardSemRedux from '../dashboardSemRedux/dashboardSemRedux'
import Transacao from '../transacao/transacao'

export default props => (
    <Router history={hashHistory}>
        <Route path='/dashboardredux' component={DashboardRedux}/>
        <Route path='/dashboardsemredux' component={DashboardSemRedux} />
        <Route path='/transacao' component={Transacao} />
        <Redirect from='*' to='/dashboardsemredux'/>
    </Router>
)