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
export const fetchDonations = () => {
  return instance.get("doacao/todas")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
interface DonationData {
  doador?: string;
  produto?: string;
  quantidade?: number;
  data?: string;
}
export const addDonation = (doador: string | undefined, produto: string | undefined, quantidade: number | undefined, data: string | undefined) => {
  instance
  .post("doacao/adicionar", {
    doador: `${doador}`,
    produto: `${produto}`,
    quantidade: `${quantidade}`,
    data: `${data}`,
  })
  .catch((err) => {
    console.error("Error" + err);
  })
}