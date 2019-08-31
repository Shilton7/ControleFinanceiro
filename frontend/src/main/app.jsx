import React from 'react'
import '../common/template/dependencias'
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Mensagens from '../common/msg/mensagens'

export default props => (
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
        <Mensagens />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer/>
    </div>
)