"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Horta extends sequelize_1.Model {
        static associate(models) {
            Horta.belongsTo(models.Pessoa, {
                foreignKey: 'fk_Pessoa_id',
                onDelete: 'CASCADE',
            });
            Horta.belongsTo(models.Endereco, {
                foreignKey: 'fk_Endereco_id',
                onDelete: 'CASCADE',
            });
        }
    }
    Horta.init({
        id_horta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        tamanho: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        fk_Pessoa_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        fk_Endereco_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Horta',
    });
    return Horta;
};
//# sourceMappingURL=horta.js.map