import axios from 'axios'
import { setCookie } from 'nookies'
import Router from 'next/router'  

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

export const signIn = (login: string | undefined, password: string | undefined ) => {
  instance
  .post("usuario/logar", {
    login: `${login}`,
    senha: `${password}`,
  })
  .then((res) => {
    let auth = res.data.auth;
    if (auth === true){
      Router.push('/doacao/principal')
    }
  })
  .catch((err) => {
    console.error("Error" + err);
  })
}