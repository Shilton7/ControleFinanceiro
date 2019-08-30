import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {listaSumario} from './dashboardAction.js'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import CardValor from '../common/widget/cardValor'
import Row from '../common/layout/row'

class Dashboard extends Component {

    componentWillMount(){
        this.props.listaSumario()
    }
    
    render(){

        const { credito, debito } = this.props.sumario

        return (
            <div>
                <ContentHeader titulo='Dashboard' small='Versão Desenvolvimento'/>
                <Content>

                    <Row>
                        <CardValor colunas='12 4' cor='green' 
                            valor={`R$ ${credito}`} texto='Créditos' icon='bank'/>

                        <CardValor colunas='12 4' cor='red'
                            valor={`R$ ${debito}`} texto='Débitos' icon='credit-card' />

                        <CardValor colunas='12 4' cor='blue'
                            valor={`R$ ${credito - debito}`} texto='Saldo' icon='money' />
                    </Row>

                </Content>
            </div>
        )
    }
}

//redux
const mapStateToProps = state => ({ sumario: state.dashboard.sumario })
const mapDispatchToProps = dispatch => bindActionCreators({ listaSumario}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)