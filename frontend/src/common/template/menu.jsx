import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem url='#/dashboardredux' icon='dashboard' label='Dashboard - Redux'/>
        <MenuItem url='#/dashboardsemredux' icon='dashboard' label='Dashboard Sem Redux' />

        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem url='#/transacao' label='Transações' icon='usd'/> 
        </MenuTree>
    </ul>
    
)