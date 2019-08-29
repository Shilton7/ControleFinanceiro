import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem url='#' icon='dashboard' label='Dashboard'/>

        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem url='#/cadastros' label='Transações' icon='usd'/> 
        </MenuTree>
    </ul>
    
)