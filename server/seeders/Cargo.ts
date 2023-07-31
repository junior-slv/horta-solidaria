import db from "../models";

export const infos = [
  {
    cargo: "Usuario",
  },
  {
    cargo: "Gerente",
  },
  {
    cargo: "Administrador",
  }
];


export const createCargos = async () => {
  try {
    for (const info of infos) {
      const existingCargo = await db.Cargo.findOne({ where: { cargo: info.cargo } });
      if (!existingCargo) {
        await db.Cargo.create(info);
      }
    }
    console.log("Cargos inseridos com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
