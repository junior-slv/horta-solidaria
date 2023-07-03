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
exports.createObjetivos = exports.infos = void 0;
const models_1 = __importDefault(require("../models"));
exports.infos = [
    {
        objetivo: "Cultivar nas hortas",
    },
    {
        objetivo: "Participar das feiras",
    },
    {
        objetivo: "Consumo próprio",
    },
    {
        objetivo: "Comercializar os produtos da horta",
    },
    {
        objetivo: "Compartilhar os produtos da horta",
    },
    {
        objetivo: "Gerar renda extra",
    }
];
const createObjetivos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const info of exports.infos) {
            const existingObjetivo = yield models_1.default.Objetivo.findOne({ where: { objetivo: info.objetivo } });
            if (!existingObjetivo) {
                yield models_1.default.Objetivo.create(info);
            }
        }
        console.log("Objetivos inseridos com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.createObjetivos = createObjetivos;
//# sourceMappingURL=Objetivo.js.map