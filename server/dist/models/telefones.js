"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Telefones extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Telefones.init({
        id_telefone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        telefone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Telefones',
    });
    return Telefones;
};
//# sourceMappingURL=telefones.js.map