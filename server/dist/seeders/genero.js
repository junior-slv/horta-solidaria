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
exports.createGenero = exports.infos = void 0;
const models_1 = __importDefault(require("../models"));
exports.infos = [
    {
        genero: "Mulher"
    },
    {
        genero: "Homem"
    },
    {
        genero: "Não binário"
    },
    {
        genero: "Agênero"
    },
    {
        genero: "Gênero fluido"
    },
    {
        genero: "Transgênero"
    },
];
const createGenero = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const info of exports.infos) {
            const existingGenero = yield models_1.default.Genero.findOne({ where: { genero: info.genero } });
            if (!existingGenero) {
                yield models_1.default.Genero.create(info);
            }
        }
        console.log("Gêneros inseridos com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.createGenero = createGenero;
//# sourceMappingURL=genero.js.map