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
const todosDoacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let doacoes = yield models_1.default.Doacao.findAll({});
        res.status(200).send(doacoes);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(412);
    }
});
const adicionarDoacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body || !req.body.doador || !req.body.produto || !req.body.quantidade) {
            return res.status(400).send("Dados inválidos na solicitação");
        }
        let info = {
            doador: req.body.doador,
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            data: req.body.data,
        };
        if (info.data.lenght > 10) {
            res.sendStatus(412);
        }
        const doacao = yield models_1.default.Doacao.create(info);
        res.status(200).send(info);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(412);
    }
});
const atualizarDoacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const doacao = yield models_1.default.Doacao.findByPk(id);
        if (!doacao) {
            return res.status(404).send("Doação não encontrada");
        }
        doacao.doador = req.body.doador || doacao.doador;
        doacao.produto = req.body.produto || doacao.produto;
        doacao.quantidade = req.body.quantidade || doacao.quantidade;
        doacao.data = req.body.data || doacao.data;
        yield doacao.save();
        res.status(200).send(doacao);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(412);
    }
});
const deletarDoacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const doacao = yield models_1.default.Doacao.findByPk(id);
        if (!doacao) {
            return res.status(404).send("Doação não encontrada");
        }
        yield doacao.destroy();
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(412);
    }
});
module.exports = {
    todosDoacao,
    adicionarDoacao,
    atualizarDoacao,
    deletarDoacao
};
//# sourceMappingURL=doacaoControlador.js.map