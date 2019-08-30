import axios from 'axios'

const base_url = 'http://localhost:3003/api/v1'

export function listaSumario() {
    const req = axios.get(`${base_url}/transacao/sumario`)
    return {
        type: 'transacao_sumario_fetched',
        payload: req
    }
    
}