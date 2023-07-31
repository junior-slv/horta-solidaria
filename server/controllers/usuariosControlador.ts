import db from "../models";
const bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken'

const todosUsuarios = async (req: any, res: any) => {
  try {
    let usuarios = await db.Usuario.findAll({
      include: [
        {
          model: db.Pessoa,
          attributes: ["nome", "cpf"],
          include: [
            {
              model: db.Telefone,
              attributes: ["telefone"]
            }
          ]
        }
      ],
      attributes: { exclude: ["pessoa_id"] }
    });

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
      !req.body.id_pessoa ||
      !req.body.id_cargo
    ) {
      return res.status(400).send("Dados inválidos na solicitação");
    }

    const pessoa = await db.Pessoa.findByPk(req.body.id_pessoa);
    const cargo = await db.Cargo.findByPk(req.body.id_cargo);

    if (!pessoa || !cargo) {
      return res.status(400).send("Pessoa ou cargo não encontrados");
    }

    let info = {
      login: req.body.login,
      senha: req.body.senha,
      fk_Pessoa_id: pessoa.id_pessoa,
      fk_Cargo_id: cargo.id_cargo
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
      return res.status(401).json({ message: "Unauthorized" });
    }

    const senhaCorrespondente = bcrypt.compareSync(senha, user.senha);
    if (!senhaCorrespondente) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const pessoa = await db.Pessoa.findByPk(user.fk_Pessoa_id);
    if (!pessoa) {
      return res.status(404).json({ message: "Pessoa not found" });
    }
    const cargoId = await db.Cargo.findByPk(user.fk_Cargo_id);
    if (!cargoId) {
      return res.status(500).json({ message: "Cargo inválido" });
    }

    const usuario_id = user.id_usuario; // Corrigido para usuarioId
    const nome = pessoa.nome;
    const cargo = cargoId.cargo;

    const token = jwt.sign({ userId: user.id_usuario }, 'chave_secreta', { expiresIn: 30000 });
    res.set('Authorization', `Bearer ${token}`);

    res.status(200).json({ usuario_id, nome, cargo, auth: true, token });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  todosUsuarios,
  adicionarUsuario,
  logarUsuario  ,
};
