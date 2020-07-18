import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listaTransacao, detalhesTransacao, detalhesDelete } from './transacaoActions'

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
                    <button className='btn btn-warning' onClick={() => this.props.detalhesTransacao(dados)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.detalhesDelete(dados)}>
                        <i className='fa fa-trash-o'></i>
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
                            <th className='table_acoes'>Opções</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ listaTransacao, detalhesTransacao, detalhesDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TransacaoList)