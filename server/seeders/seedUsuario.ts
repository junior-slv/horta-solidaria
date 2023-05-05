import db from "../models";

export const seedUsuario = [
  {
    login: "fulano123",
    senha: "senha123",
    cargo: "gerente",
    cpf: "111.222.333-44"
  },
  {
    login: "ciclano456",
    senha: "senha456",
    cargo: "atendente",
    cpf: "555.666.777-88"
  },
  {
    login: "beltrano789",
    senha: "senha789",
    cargo: "estagiário",
    cpf: "999.000.111-22"
  }
]


const createUser = async () => {
  try {
    for (const user of seedUsuario) {
      await db.Usuario.create(user);
    }
    console.log("Usuarios criados com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
