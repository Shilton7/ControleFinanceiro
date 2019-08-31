import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const base_url = 'http://localhost:3003/api/v1'

export function listaTransacao() {
    const req = axios.get(`${base_url}/transacao`)
    return {
        type: 'transacao_fetched',
        payload: req
    }
}

export function criar(valores) {
    axios.post(`${base_url}/transacao`, valores)
        .then(res => {
            toastr.success('Sucesso', 'Salvo com sucesso!')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error ))
        })
        
    return {
        type: 'salvar_transacao'
        }
}