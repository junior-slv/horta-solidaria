import db from "../models";

export const infos = [
  {
    objetivo: "Cultivar nas hortas",
  },
  {
    objetivo: "Participar das feiras",
  },
  {
    objetivo: "Consumo próprio",
  },
  {
    objetivo: "Comercializar os produtos da horta",
  },
  {
    objetivo: "Compartilhar os produtos da horta",
  },
  {
    objetivo: "Gerar renda extra",
  }
];


export const createObjetivos = async () => {
  try {
    for (const info of infos) {
      const existingObjetivo = await db.Objetivo.findOne({ where: { objetivo: info.objetivo } });
      if (!existingObjetivo) {
        await db.Objetivo.create(info);
      }
    }
    console.log("Objetivos inseridos com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
