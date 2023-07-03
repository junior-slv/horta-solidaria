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
      const existingEstadoCivil = await db.Estado_Civil.findOne({ where: { estadoCivil: info.estadoCivil } });
      if (!existingEstadoCivil) {
        await db.Estado_Civil.create(info);
      }
    }
    console.log("Estados civis inseridos com sucesso.");
  } catch (err) {
    console.error(err);
  }
}