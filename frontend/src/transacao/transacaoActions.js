import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const base_url = 'http://localhost:3003/api/v1'
const initial_values = {}

export function inicial() {
    return [
        showTabs('tabListar', 'tabCreate'),
        selectTab('tabListar'),
        listaTransacao(),
        initialize('TransacaoForm', initial_values )
    ]
}

export function listaTransacao() {
    const req = axios.get(`${base_url}/transacao`)
    return {
        type: 'transacao_fetched',
        payload: req
    }
}

export function detalhesTransacao(transacao) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('TransacaoForm', transacao)
    ]
}

export function detalhesDelete(transacao) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('TransacaoForm', transacao)
    ]
}

export function criar(valores) {
    return submit(valores,'post')
}

export function atualizar(valores) {
    return submit(valores, 'put')
}

export function deletar(valores) {
    return submit(valores, 'delete')
}

function submit(valores, method) {

    const id = valores._id ? valores._id : ''

    return dispatch => {

        axios[method](`${base_url}/transacao/${id}`, valores)
            .then(res => {
                toastr.success('Sucesso', 'Realizado com sucesso!')
                dispatch([
                    resetForm('TransacaoForm'),
                    dispatch(inicial())
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}