import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from '../dashboard/dashboard'
import Transacao from '../transacao/transacao'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/transacao' component={Transacao} />
        <Redirect from='*' to='/'/>
    </Router>
)