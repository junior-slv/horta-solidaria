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
exports.createEstado = exports.estados = void 0;
const models_1 = __importDefault(require("../models"));
exports.estados = [
    {
        estado: "Rondônia",
        uf: "RO",
    },
    {
        estado: "Acre",
        uf: "AC",
    },
    {
        estado: "Amazonas",
        uf: "AM"
    },
    {
        estado: "Roraima",
        uf: "RR"
    },
    {
        estado: "Pará",
        uf: "PA"
    },
    {
        estado: "Amapá",
        uf: "AP"
    },
    {
        estado: "Tocantins",
        uf: "TO"
    },
    {
        estado: "Maranhão",
        uf: "MA"
    },
    {
        estado: "Piauí",
        uf: "PI"
    },
    {
        estado: "Ceará",
        uf: "CE"
    },
    {
        estado: "Rio Grande do Norte",
        uf: "RN"
    },
    {
        estado: "Paraíba",
        uf: "PB"
    },
    {
        estado: "Pernambuco",
        uf: "PE"
    },
    {
        estado: "Alagoas",
        uf: "AL"
    },
    {
        estado: "Sergipe",
        uf: "SE"
    },
    {
        estado: "Bahia",
        uf: "BA"
    },
    {
        estado: "Minas Gerais",
        uf: "MG"
    },
    {
        estado: "Espírito Santo",
        uf: "ES"
    },
    {
        estado: "Rio de Janeiro",
        uf: "RJ"
    },
    {
        estado: "São Paulo",
        uf: "SP"
    },
    {
        estado: "Paraná",
        uf: "PR"
    },
    {
        estado: "Santa Catarina",
        uf: "SC"
    },
    {
        estado: "Rio Grande do Sul",
        uf: "RS"
    },
    {
        estado: "Mato Grosso do Sul",
        uf: "MS"
    },
    {
        estado: "Mato Grosso",
        uf: "MT"
    },
    {
        estado: "Goiás",
        uf: "GO"
    },
    {
        estado: "Distrito Federal",
        uf: "DF"
    },
];
const createEstado = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const estado of exports.estados) {
            const existingEstado = yield models_1.default.Estado.findOne({ where: { uf: estado.uf } });
            if (!existingEstado) {
                yield models_1.default.Estado.create(estado);
            }
        }
        console.log("Estados criados com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.createEstado = createEstado;
//# sourceMappingURL=Estado.js.map