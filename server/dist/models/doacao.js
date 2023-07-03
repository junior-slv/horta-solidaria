"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Doacao extends sequelize_1.Model {
        static associate(models) {
            // Definir as associações aqui
        }
    }
    Doacao.init({
        id_doacao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        doador: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        produto: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Doacao',
    });
    return Doacao;
};
//# sourceMappingURL=doacao.js.map