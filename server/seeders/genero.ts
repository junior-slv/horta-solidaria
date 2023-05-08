import db from "../models";

export const infos = [
  {
    genero: "Mulher"
  },
  {
    genero: "Homem"
  },
  {
    genero: "Não binário"
  },
  {
    genero: "Agênero"
  },
  {
    genero: "Gênero fluido"
  },
  {
    genero: "Transgênero"
  },
];


export const createGenero = async () => {
  try {
    for (const info of infos) {
      await db.Genero.create(info);
    }
    console.log("Gêneros inseridos com sucesso.");
  } catch (err) {
    console.error(err);
  }
}