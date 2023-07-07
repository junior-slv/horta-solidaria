import axios from "axios";

export const instance = axios.create({
  baseURL: "https://horta-api-li7v.onrender.com/api/",
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
export const fetchPessoaById = (
  id: string | undefined,
  usuario_id: number | undefined
) => {
  return instance
    .post(`pessoa/${id}`, {
      usuario_id: usuario_id,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });
};


export const getByCep = async (cep: string) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null; // or handle the error in a different way
  }
}


export const addPessoa = async (  
  usuario_id: number | null,
  telefone: string | undefined,
  estadoCivil: string | undefined,
  genero: string | undefined,
  etnia: string | undefined,
  rua: string | undefined,
  numero: string | undefined,
  complemento: string | undefined,
  bairro: string | undefined,
  cidade: string | undefined,
  estado: string | undefined,
  pais: string | undefined,
  nome: string | undefined,
  email: string | undefined,
  cpf: string | undefined,
  cep: string | undefined,
  dataNascimento: string | undefined,
  dependentes: string | null,
  rendaFamiliar: string | null,
  capacitacao: string | null,
  comercializar: string | undefined,
  telefonerecado: string | undefined,
  selectedObjetivo: string | undefined,
  selectedHorta: string | null,) => {

  try {
    const response = await instance.post("pessoa/adicionar", {
      usuario_id: `${usuario_id}`,
      telefone: `${telefone}`,
      estadocivil: `${estadoCivil}`,
      genero: `${genero}`,
      etnia: `${etnia}`,
      rua: `${rua}`,
      numero: `${numero}`,
      complemento: `${complemento}`,
      bairro: `${bairro}`,
      cidade: `${cidade}`,
      estado: `${estado}`,
      pais: `${pais}`,
      nome: `${nome}`,
      email: `${email}`,
      cpf: `${cpf}`,
      cep: `${cep}`,
      datanascimento: `${dataNascimento}`,
      dependentes: `${dependentes}`,
      rendafamiliar: `${rendaFamiliar}`,
      capacitacao: `${capacitacao}`,
      comercializar: `${comercializar}`,
      telefonerecado: `${telefonerecado}`,
      objetivo: `${selectedObjetivo}`,
      horta: `${selectedHorta}`,
    });
    console.log(response)

    console.log("Pessoa adicionada com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao adicionar pessoa:", error);
  }
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
  instance.delete(`doacao/deletar/${id}`).catch((err) => {
    console.error("Error" + err);
  });
};
export const deletarPessoa = (id: string | undefined, usuario_id: number | null) => {
  return instance.delete(`pessoa/deletar/${id}`, {
    data: { usuario_id: usuario_id },
  })
  .catch((err) => {
    console.error("Error" + err);
  });
};


export const deletarUsuario = (id: number | undefined) => {
  instance.delete(`usuario/deletar/${id}`)
  .then(fetchPessoas)
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
