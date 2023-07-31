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
exports.createPessoas = exports.infos = void 0;
const models_1 = __importDefault(require("../models"));
exports.infos = [
    {
        nome: "Juliana Lima Ferreira",
        email: "juliana.lima@example.com",
        cpf: "654.321.987-76",
        dataNascimento: "1990-03-20",
        fk_Endereco_id: 1,
        fk_Telefones_id: 1,
        fk_Estado_Civil_id: 2,
        fk_Genero_id: 1,
        fk_Etnia_id: 3,
        dependentes: 3,
        rendaFamiliar: 7000,
        capacitacao: "Sim",
        comercializar: "Em casa",
        fk_Objetivo_id: 1,
        fk_Horta_id: 1,
    },
    {
        nome: "Rafaela Santos Silva",
        email: "rafaela.santos@example.com",
        cpf: "123.456.789-10",
        dataNascimento: "1985-07-15",
        fk_Endereco_id: 1,
        fk_Telefones_id: 1,
        fk_Estado_Civil_id: 1,
        fk_Genero_id: 2,
        fk_Etnia_id: 1,
        dependentes: 2,
        rendaFamiliar: 5000,
        capacitacao: "Sim",
        comercializar: "Em casa",
        fk_Objetivo_id: 1,
        fk_Horta_id: 1,
    },
    {
        nome: "Gabriel Oliveira Costa",
        email: "gabriel.oliveira@example.com",
        cpf: "987.654.321-98",
        dataNascimento: "1993-12-10",
        fk_Endereco_id: 1,
        fk_Telefones_id: 1,
        fk_Estado_Civil_id: 1,
        fk_Genero_id: 1,
        fk_Etnia_id: 2,
        dependentes: 1,
        rendaFamiliar: 3000,
        capacitacao: "Sim",
        comercializar: "Em casa",
        fk_Objetivo_id: 1,
        fk_Horta_id: 1,
    },
    {
        nome: "Amanda Oliveira Santos",
        email: "amanda.oliveira@example.com",
        cpf: "789.123.456-12",
        dataNascimento: "1988-09-25",
        fk_Endereco_id: 1,
        fk_Telefones_id: 1,
        fk_Estado_Civil_id: 1,
        fk_Genero_id: 2,
        fk_Etnia_id: 3,
        dependentes: 0,
        rendaFamiliar: 4000,
        capacitacao: "Sim",
        comercializar: "Em casa",
        fk_Objetivo_id: 1,
        fk_Horta_id: 1,
    },
    {
        nome: "Lucas Souza Lima",
        email: "lucas.souza@example.com",
        cpf: "987.654.321-01",
        dataNascimento: "1992-05-12",
        fk_Endereco_id: 1,
        fk_Telefones_id: 1,
        fk_Estado_Civil_id: 2,
        fk_Genero_id: 1,
        fk_Etnia_id: 1,
        dependentes: 1,
        rendaFamiliar: 6000,
        capacitacao: "Sim",
        comercializar: "Em casa",
        fk_Objetivo_id: 1,
        fk_Horta_id: 1,
    },
    // Adicione mais objetos aqui...
];
const createPessoas = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const info of exports.infos) {
            yield models_1.default.Pessoa.create(info);
        }
        console.log("Pessoas inseridas com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.createPessoas = createPessoas;
//# sourceMappingURL=pessoa.js.map