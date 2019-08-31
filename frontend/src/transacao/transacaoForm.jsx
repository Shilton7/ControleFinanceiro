import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class TransacaoForm extends Component {
    render(){

        const {handleSubmit} = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component='input' />
                    <Field name='mes' component='input' />
                    <Field name='ano' component='input' />

                </div>
                <div className='box-footer'>
                    <button type='reset' className='btn btn-primary'>Limpar</button>
                    <button type='submit' className='btn btn-success'>Salvar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'TransacaoForm' })(TransacaoForm)