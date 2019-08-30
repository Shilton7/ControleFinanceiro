import axios from 'axios'

const base_url = 'http://localhost:3003/api/v1'

export function listaTransacao() {
    const req = axios.get(`${base_url}/transacao`)
    return {
        type: 'transacao_fetched',
        payload: req
    }
}