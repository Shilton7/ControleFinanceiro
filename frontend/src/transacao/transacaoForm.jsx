import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelInput from '../common/form/label_input'
import { inicial } from './transacaoActions'
import CreditoLista from './CreditoLista'

class TransacaoForm extends Component {
    render(){

        const {handleSubmit, readOnly, credito } = this.props

        return (
            
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field cols='12 4' name='nome' component={LabelInput} 
                        readOnly={readOnly}
                        label='Nome' placeholder='Informe o nome' type='text'/>

                    <Field cols='12 4' name='mes' component={LabelInput}
                        readOnly={readOnly}
                        label='Mês' placeholder='Informe o mês' type='text' />

                    <Field cols='12 4' name='ano' component={LabelInput}
                        readOnly={readOnly}
                        label='Ano' placeholder='Informe o ano' type='text' />

                    <CreditoLista cols='12 6' readOnly={readOnly} list={credito} />

                </div>

                <div className='box-footer'>
                    <button type='button' className='btn btn-primary' 
                        onClick={this.props.inicial}> Voltar</button>

                    <button type='submit' 
                            className={`btn btn-${this.props.btn_class}`}>
                                {this.props.btn_label}
                            </button>
                </div>


            </form>

        )
    }
}
// redux e usando destroyOnUnmount para não destruir o formulário com os dados no momento de editar
TransacaoForm = reduxForm({ form: 'TransacaoForm', destroyOnUnmount: false })(TransacaoForm)
const selector = formValueSelector('TransacaoForm')
const mapStateToProps = state => ({
  credito: selector(state, 'credito')
});
const mapDispatchToProps = dispatch => bindActionCreators({inicial}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TransacaoForm)