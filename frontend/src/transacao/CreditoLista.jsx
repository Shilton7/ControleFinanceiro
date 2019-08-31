import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../common/layout/grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/form/input'

class CreditoLista extends Component {

    addLinha(index,item = {}){
        if(!this.props.readOnly){
            this.props.arrayInsert('TransacaoForm','credito', index, item)
        }
    }

    deletarLinha(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('TransacaoForm', 'credito', index)
        }
    }

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
                <td>
                    <button type='button' className='btn btn-success'
                    onClick={() => this.addLinha(index+1)}>
                        <i className='fa fa-plus'></i>
                    </button>

                    <button type='button' className='btn btn-warning'
                        onClick={() => this.addLinha(index + 1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>

                    <button type='button' className='btn btn-danger'
                        onClick={() => this.deletarLinha(index)}>
                        <i className='fa fa-trash'></i>
                    </button>

                </td>
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
                            <th className='table_opcoes'>Ações</th>
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

//redux
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(CreditoLista)