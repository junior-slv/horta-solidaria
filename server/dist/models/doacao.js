"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Doacao extends sequelize_1.Model {
        static associate(models) {
            Doacao.belongsTo(models.Pessoa, { foreignKey: "fk_Pessoa_id" });
        }
    }
    Doacao.init({
        id_doacao: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
        fk_Pessoa_id: {
            type: DataTypes.UUID,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Doacao',
    });
    return Doacao;
};
//# sourceMappingURL=doacao.js.map