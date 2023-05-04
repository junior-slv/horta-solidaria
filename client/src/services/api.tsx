import axios from 'axios'
import { setCookie } from 'nookies'
import Router from 'next/router'  

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

export const signIn = (login: string | undefined, password: string | undefined) => {
  instance.post("usuario/logar", { login, senha: password })
    .then((res) => {
      const auth = res.data.auth
      const token = res.data.token
      if (auth === true){
        Router.push('/users');
      }
      // setCookie(undefined, 'horta.token', token, {
      //   maxAge: 60 * 60 * 1, // 1 hora
      //   secure: true, // Adiciona a opção secure ao cookie
      // })
    })
    .catch((err) => {
      console.error("Error" + err);
    })
}