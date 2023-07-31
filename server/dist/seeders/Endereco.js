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
exports.createEndereco = exports.endereco = void 0;
const models_1 = __importDefault(require("../models"));
exports.endereco = [
    {
        rua: 'Rua 1',
        numero: '123',
        complemento: 'Complemento 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        cep: '86020-420',
        estado_id: 1,
    },
    {
        rua: 'Rua 1',
        numero: '123',
        complemento: 'Complemento 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        cep: '86020-420',
        estado_id: 2,
    },
    {
        rua: 'Rua 1',
        numero: '123',
        complemento: 'Complemento 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        cep: '86020-420',
        estado_id: 1,
    },
    {
        rua: 'Rua 1',
        numero: '123',
        complemento: 'Complemento 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        cep: '86020-420',
        estado_id: 4,
    },
    {
        rua: 'Rua 1',
        numero: '123',
        complemento: 'Complemento 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        cep: '86020-420',
        estado_id: 1,
    },
    {
        rua: 'Rua 1',
        numero: '123',
        complemento: 'Complemento 1',
        bairro: 'Bairro 1',
        cidade: 'Cidade 1',
        cep: '86020-420',
        estado_id: 12,
    },
];
const createEndereco = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const user of exports.endereco) {
            yield models_1.default.Endereco.create(user);
        }
        console.log("Usuarios criados com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.createEndereco = createEndereco;
//# sourceMappingURL=Endereco.js.map