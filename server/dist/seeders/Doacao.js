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
exports.seedDoacoes = exports.infos = void 0;
const models_1 = __importDefault(require("../models"));
exports.infos = [
    {
        doador: "Maria",
        produto: "Arroz",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "José",
        produto: "Feijão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Ana",
        produto: "Óleo de soja",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "João",
        produto: "Açúcar",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Carla",
        produto: "Macarrão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Pedro",
        produto: "Leite em pó",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Lucas",
        produto: "Café",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Julia",
        produto: "Feijão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Fernando",
        produto: "Açúcar",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Isabela",
        produto: "Arroz",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Rafael",
        produto: "Feijão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Mariana",
        produto: "Macarrão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Gustavo",
        produto: "Leite em pó",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Bianca",
        produto: "Café",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Diego",
        produto: "Arroz",
        quantidade: 3,
        data: "01/01/2023"
    },
];
const seedDoacoes = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const info of exports.infos) {
            yield models_1.default.Doacao.create(info);
        }
        console.log("Doações inseridas com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.seedDoacoes = seedDoacoes;
//# sourceMappingURL=Doacao.js.map