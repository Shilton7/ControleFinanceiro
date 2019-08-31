import React , { Component } from 'react'
import Grid from '../common/layout/grid'
import { Field } from 'redux-form'
import Input from '../common/form/input'

class CreditoLista extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map((item,index) => (
            <tr key={index}>
                <td>
                    <Field name={`credito[${index}].nome`} component={Input}
                        placeholder='Informe o nome' type='text'
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`credito[${index}].valor`} component={Input}
                        placeholder='Informe o nome' type='text'
                        readOnly={this.props.readOnly} />
                </td>
                <td></td>
            </tr>

        ))

    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                </fieldset>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>

            </Grid>
        )
    }
}

export default CreditoLista