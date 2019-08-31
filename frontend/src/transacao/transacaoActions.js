import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const base_url = 'http://localhost:3003/api/v1'

export function listaTransacao() {
    const req = axios.get(`${base_url}/transacao`)
    return {
        type: 'transacao_fetched',
        payload: req
    }
}

export function criar(valores) {
    return dispatch => {
        axios.post(`${base_url}/transacao`, valores)
            .then(res => {
                toastr.success('Sucesso', 'Salvo com sucesso!')
                dispatch([
                    resetForm('TransacaoForm'),
                    listaTransacao(),
                    selectTab('tabListar'),
                    showTabs('tabListar','tabCreate')

                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })

    }
    
        
}