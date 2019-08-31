import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelInput from '../common/form/label_input'

class TransacaoForm extends Component {
    render(){

        const {handleSubmit} = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field cols='12 4' name='nome' component={LabelInput} 
                        label='Nome' placeholder='Informe o nome' type='text'/>

                    <Field cols='12 4' name='mes' component={LabelInput}
                        label='Mês' placeholder='Informe o mês' type='text' />

                    <Field cols='12 4' name='ano' component={LabelInput}
                        label='Ano' placeholder='Informe o ano' type='text' />

                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-success'>Salvar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'TransacaoForm' })(TransacaoForm)