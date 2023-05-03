import db from "../models";
const bcrypt = require('bcrypt');

const todosUsuarios = async (req: any, res: any) => {
  try {
    let usuarios = await db.Usuario.findAll({});
    res.status(200).send(usuarios);
  } catch (error) {
    console.log(error);
    res.status(412);
  }
};
const adicionarUsuario = async (req: any, res: any) => {
  try {
    if (
      !req.body ||
      !req.body.login ||
      !req.body.senha ||
      !req.body.cargo ||
      !req.body.cpf
    ) {
      return res.status(400).send("Dados inválidos na solicitação");
    }

    let info = {
      login: req.body.login,
      senha: req.body.senha,
      cargo: req.body.cargo,
      cpf: req.body.cpf,
    };
    const usuario = await db.Usuario.create(info);
    res.status(200).send(usuario);
  } catch (error) {
    console.log(error);
    res.sendStatus(412);
  }
};
const logarUsuario = async (req: any, res: any) => {
  try {
    const login = req.body.login;
    const senha = req.body.senha;
    const user = await db.Usuario.findOne({ where: { login } });
  
    if (!user) {
      console.log("true");
      return res.status(401).json({ message: "Usuário não encontrado" });
    }
  
    const passwordMatch = await bcrypt.compare(senha, user.senha);
  
    if (!passwordMatch) {
      return res.status(401).json({ message: "Senha incorreta" });
    }
    res.status(200).json({ message: "Usuário autenticado com sucesso" });
  } catch(error){
    console.log(error)
    res.sendStatus(412)
  }
};
module.exports = {
  todosUsuarios,
  adicionarUsuario,
  logarUsuario,
};
