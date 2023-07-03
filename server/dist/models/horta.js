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
        nome: DataTypes.STRING(100),
        tamanho: DataTypes.STRING(100),
        descricao: DataTypes.STRING(100),
        fk_Pessoa_id: DataTypes.UUID,
        fk_Endereco_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Horta',
    });
    return Horta;
};
//# sourceMappingURL=horta.js.map