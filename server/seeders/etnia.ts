import db from "../models";

export const infos = [
  {
    etnia: "Branco/Caucasiano",
  },
  {
    etnia: "Negro/Afrodescendente",
  },
  {
    etnia: "Pardo",
  },
  {
    etnia: "Latino/Hispano",
  },
  {
    etnia: "Asiático",
  },
  {
    etnia: "Indígena/Nativo",
  },
  {
    etnia: "Mestiço/Multirracial",
  },

];


export const createEtnias = async () => {
  try {
    for (const info of infos) {
      const existingEtnia = await db.Etnia.findOne({ where: { etnia: info.etnia } });
      if (!existingEtnia) {
        await db.Etnia.create(info);
      }
    }
    console.log("Etnias inseridas com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
