"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
module.exports = (sequelize, DataTypes) => {
    class Usuario extends sequelize_1.Model {
        static associate(models) {
            Usuario.belongsTo(models.Cargo, { foreignKey: "fk_Cargo_id" });
            Usuario.belongsTo(models.Pessoa, { foreignKey: "fk_Pessoa_id" });
        }
    }
    Usuario.init({
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        login: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(100),
            allowNull: false,
            set(value) {
                const hashedPassword = bcrypt_1.default.hashSync(value, 10);
                this.setDataValue('senha', hashedPassword);
            },
        },
        fk_Cargo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Pessoa_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Usuario",
    });
    return Usuario;
};
//# sourceMappingURL=usuario.js.map