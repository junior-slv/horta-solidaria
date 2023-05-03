import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/usuario/logar'
})

const loginService = {
    loginQuote: async ()  => {
        const response = await instance.post("usuario/logar")
    }
}

export default instance;