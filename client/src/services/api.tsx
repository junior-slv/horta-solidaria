import axios from 'axios'
import { setCookie } from 'nookies'
import Router from 'next/router'  

export const instance = axios.create({
  baseURL: 'http://localhost:3001/api/'
})


export const fetchDonations = () => {
  return instance.get("doacao/todas")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const fetchUsers = () => {
  return instance.get("pessoas/todas")
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