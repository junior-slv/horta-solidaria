"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const bcrypt = require('bcrypt');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const todosUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let usuarios = yield models_1.default.Usuario.findAll({
            include: [
                {
                    model: models_1.default.Pessoa,
                    attributes: ["nome", "cpf"],
                    include: [
                        {
                            model: models_1.default.Telefone,
                            attributes: ["telefone"]
                        }
                    ]
                }
            ],
            attributes: { exclude: ["pessoa_id"] }
        });
        res.status(200).send(usuarios);
    }
    catch (error) {
        console.log(error);
        res.status(412);
    }
});
const adicionarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body ||
            !req.body.login ||
            !req.body.senha ||
            !req.body.id_pessoa ||
            !req.body.id_cargo) {
            return res.status(400).send("Dados inválidos na solicitação");
        }
        const pessoa = yield models_1.default.Pessoa.findByPk(req.body.id_pessoa);
        const cargo = yield models_1.default.Cargo.findByPk(req.body.id_cargo);
        if (!pessoa || !cargo) {
            return res.status(400).send("Pessoa ou cargo não encontrados");
        }
        let info = {
            login: req.body.login,
            senha: req.body.senha,
            fk_Pessoa_id: pessoa.id_pessoa,
            fk_Cargo_id: cargo.id_cargo
        };
        const usuario = yield models_1.default.Usuario.create(info);
        res.status(200).send(usuario);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(412);
    }
});
const logarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const login = req.body.login;
        const senha = req.body.senha;
        const user = yield models_1.default.Usuario.findOne({ where: { login } });
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const senhaCorrespondente = bcrypt.compareSync(senha, user.senha);
        if (!senhaCorrespondente) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const pessoa = yield models_1.default.Pessoa.findByPk(user.fk_Pessoa_id);
        if (!pessoa) {
            return res.status(404).json({ message: "Pessoa not found" });
        }
        const cargoId = yield models_1.default.Cargo.findByPk(user.fk_Cargo_id);
        if (!cargoId) {
            return res.status(500).json({ message: "Cargo inválido" });
        }
        const usuario_id = user.id_usuario; // Corrigido para usuarioId
        const nome = pessoa.nome;
        const cargo = cargoId.cargo;
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'chave_secreta', { expiresIn: 300 });
        res.status(200).json({ usuario_id, nome, cargo, auth: true, token });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
module.exports = {
    todosUsuarios,
    adicionarUsuario,
    logarUsuario,
};
//# sourceMappingURL=usuariosControlador.js.map