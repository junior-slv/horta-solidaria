import axios from 'axios'
    
export const instance = axios.create({
    baseURL: 'http://localhost:3001/api/'
})
export const signIn = (login: string | undefined, password: string | undefined ) => {
    instance
    .post("usuario/logar", {
      login: `${login}`,
      senha: `${password}`,
    })
    .catch((err) => {
      console.error("Error" + err);
    })
}
