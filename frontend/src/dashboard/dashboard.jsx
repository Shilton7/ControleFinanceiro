import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import CardValor from '../common/widget/cardValor'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render(){
        return (
            <div>
                <ContentHeader titulo='Dashboard' small='Versão Desenvolvimento'/>
                <Content>

                    <Row>
                        <CardValor colunas='12 4' cor='green' 
                                valor='R$ 30' texto='Créditos' icon='bank'/>

                        <CardValor colunas='12 4' cor='red'
                            valor='R$ 25' texto='Débitos' icon='credit-card' />

                        <CardValor colunas='12 4' cor='blue'
                            valor='R$ 5' texto='Saldo' icon='money' />
                    </Row>

                </Content>
            </div>
        )
    }
}

export default Dashboard