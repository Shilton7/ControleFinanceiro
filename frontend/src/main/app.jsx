import React from 'react'
import '../common/template/dependencias'
import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'

export default props => (
    <div className='wrapper'>
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            <h1>Container</h1>
        </div>
        <Footer/>
    </div>
)