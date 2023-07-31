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
exports.createCargos = exports.infos = void 0;
const models_1 = __importDefault(require("../models"));
exports.infos = [
    {
        cargo: "Usuario",
    },
    {
        cargo: "Gerente",
    },
    {
        cargo: "Administrador",
    }
];
const createCargos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        for (const info of exports.infos) {
            const existingCargo = yield models_1.default.Cargo.findOne({ where: { cargo: info.cargo } });
            if (!existingCargo) {
                yield models_1.default.Cargo.create(info);
            }
        }
        console.log("Cargos inseridos com sucesso.");
    }
    catch (err) {
        console.error(err);
    }
});
exports.createCargos = createCargos;
//# sourceMappingURL=Cargo.js.map