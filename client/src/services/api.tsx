import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001/api/",
});

export const fetchDoacoes = () => {
  return instance
    .get("doacao/todas")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const fetchPessoas = () => {
  return instance
    .get("pessoa/todas")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const fetchUsuarios = () => {
  return instance
    .get("usuario/todos")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const deletarDoacao = (id: number | undefined) => {
  instance.delete(`doacao/deletar/${id}`)
  .catch((err) => {
    console.error("Error" + err);
  });
};

interface DonationData {
  doador?: string;
  produto?: string;
  quantidade?: number;
  data?: string;
}
export const addDonation = (
  doador: string | undefined,
  produto: string | undefined,
  quantidade: number | undefined,
  data: string | undefined
) => {
  instance
    .post("doacao/adicionar", {
      doador: `${doador}`,
      produto: `${produto}`,
      quantidade: `${quantidade}`,
      data: `${data}`,
    })
    .catch((err) => {
      console.error("Error" + err);
    });
};
