import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import CardValor from '../common/widget/cardValor'

export default ({credito, debito }) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <CardValor colunas='12 4' cor='green'
                    valor={`R$ ${credito}`} texto='Créditos' icon='bank' />

                <CardValor colunas='12 4' cor='red'
                    valor={`R$ ${debito}`} texto='Débitos' icon='credit-card' />

                <CardValor colunas='12 4' cor='blue'
                    valor={`R$ ${credito - debito}`} texto='Saldo' icon='money' />
            </Row>
        </fieldset>
    </Grid>
)