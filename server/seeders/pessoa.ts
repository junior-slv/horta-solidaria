import db from "../models";

export const infos = [
  {
    nome: "Juliana Lima Ferreira",
    email: "juliana.lima@example.com",
    cpf: "654.321.987-76",
    dataNascimento: "1990-03-20",
    fk_Endereco_id: 1,
    fk_Telefones_id: 1,
    fk_Estado_Civil_id: 2,
    fk_Genero_id: 1,
    fk_Etnia_id: 3,
    dependentes: 3,
    rendaFamiliar: 7000,
    capacitacao: "Sim",
    comercializar: "Em casa",
    fk_Objetivo_id: 1,
    fk_Horta_id: 1,
  },
  {
    nome: "Rafaela Santos Silva",
    email: "rafaela.santos@example.com",
    cpf: "123.456.789-10",
    dataNascimento: "1985-07-15",
    fk_Endereco_id: 1,
    fk_Telefones_id: 1,
    fk_Estado_Civil_id: 1,
    fk_Genero_id: 2,
    fk_Etnia_id: 1,
    dependentes: 2,
    rendaFamiliar: 5000,
    capacitacao: "Sim",
    comercializar: "Em casa",
    fk_Objetivo_id: 1,
    fk_Horta_id: 1,
  },
  {
    nome: "Gabriel Oliveira Costa",
    email: "gabriel.oliveira@example.com",
    cpf: "987.654.321-98",
    dataNascimento: "1993-12-10",
    fk_Endereco_id: 1,
    fk_Telefones_id: 1,
    fk_Estado_Civil_id: 1,
    fk_Genero_id: 1,
    fk_Etnia_id: 2,
    dependentes: 1,
    rendaFamiliar: 3000,
    capacitacao: "Sim",
    comercializar: "Em casa",
    fk_Objetivo_id: 1,
    fk_Horta_id: 1,
  },
  {
    nome: "Amanda Oliveira Santos",
    email: "amanda.oliveira@example.com",
    cpf: "789.123.456-12",
    dataNascimento: "1988-09-25",
    fk_Endereco_id: 1,
    fk_Telefones_id: 1,
    fk_Estado_Civil_id: 1,
    fk_Genero_id: 2,
    fk_Etnia_id: 3,
    dependentes: 0,
    rendaFamiliar: 4000,
    capacitacao: "Sim",
    comercializar: "Em casa",
    fk_Objetivo_id: 1,
    fk_Horta_id: 1,
  },
  {
    nome: "Lucas Souza Lima",
    email: "lucas.souza@example.com",
    cpf: "987.654.321-01",
    dataNascimento: "1992-05-12",
    fk_Endereco_id: 1,
    fk_Telefones_id: 1,
    fk_Estado_Civil_id: 2,
    fk_Genero_id: 1,
    fk_Etnia_id: 1,
    dependentes: 1,
    rendaFamiliar: 6000,
    capacitacao: "Sim",
    comercializar: "Em casa",
    fk_Objetivo_id: 1,
    fk_Horta_id: 1,
  },
  // Adicione mais objetos aqui...
];


export const createPessoas = async () => {
  try {
    for (const info of infos) {
        await db.Pessoa.create(info);
    }
    console.log("Pessoas inseridas com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
