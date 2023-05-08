import db from "../models";

export const infos = [
  {
    estadoCivil: "Solteiro(a)",
  },
  {
    estadoCivil: "Casado(a)",
  },
  {
    estadoCivil: "Divorciado(a)",
  },
  {
    estadoCivil: "Separado(a)",
  },
  {
    estadoCivil: "Viúvo(a)",
  }
];


export const createEstadoCivil = async () => {
  try {
    for (const info of infos) {
      await db.EstadoCivil.create(info);
    }
    console.log("Gêneros inseridos com sucesso.");
  } catch (err) {
    console.error(err);
  }
}