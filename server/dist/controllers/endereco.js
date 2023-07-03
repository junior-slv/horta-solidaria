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
const listarEnderecos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Registro da requisição
        yield models_1.default.Request.create({
            method: req.method,
            url: req.url,
            timestamp: new Date()
        });
        // Busque todos os endereços usando o método findAll do modelo
        const enderecos = yield models_1.default.Endereco.findAll({
            include: {
                model: models_1.default.Estado,
                attributes: ['estado', 'uf'] // Especifique os atributos 'estado' e 'uf'
            },
            attributes: {
                exclude: ['estado_id'] // Exclua o atributo 'estado_id' da resposta
            }
        });
        res.status(200).json({ enderecos });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao listar endereços' });
    }
});
module.exports = {
    listarEnderecos,
};
//# sourceMappingURL=endereco.js.map