import React, { Component } from 'react'
import axios from 'axios'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import CardValor from '../common/widget/cardValor'
import Row from '../common/layout/row'

const base_url = 'http://localhost:3003/api/v1'

class DashboardSemRedux extends Component {

    constructor(props){
        super(props)
        this.state = { credito: 0, debito: 0 }
    }

    listaSumario() {
        axios.get(`${base_url}/transacao/sumario`)
            .then(resp => this.setState(resp.data))
    }
    componentWillMount() {
        this.listaSumario()
    }

    render() {

        const { credito, debito } = this.state

        return (
            <div>
                <ContentHeader titulo='Dashboard sem Redux' small='Versão Desenvolvimento' />
                <Content>

                    <Row>
                        <CardValor colunas='12 4' cor='green'
                            valor={`R$ ${credito}`} texto='Créditos' icon='bank' />

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

export default DashboardSemRedux