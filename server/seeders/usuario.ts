import db from "../models";

export const Usuario = [
    {
      login: 'root',
      senha: 'root',
    },
  ];
  

  export const createUsuario = async () => {
    try {
      for (const user of Usuario) {
        await db.Usuario.create(user);
      }
      console.log("Usuarios criados com sucesso.");
    } catch (err) {
      console.error(err);
    }
  }