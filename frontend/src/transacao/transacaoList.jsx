import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listaTransacao, atualizar } from './transacaoActions'

class TransacaoList extends Component {

    componentWillMount() {
        this.props.listaTransacao()
    }

    renderRows() {
        const lista = this.props.list || []
        return lista.map(dados => (
            <tr key={dados._id}>
                <td>{dados.nome}</td>
                <td>{dados.mes}</td>
                <td>{dados.ano}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.atualizar(dados)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        //console.log(this.props.list)
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th colSpan='2'>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}


//redux
const mapStateToProps = state => ({ list: state.transacao.list })
const mapDispatchToProps = dispatch => bindActionCreators({listaTransacao, atualizar}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TransacaoList)