"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Registros extends sequelize_1.Model {
        static associate(models) {
            Registros.belongsTo(models.Usuario, { foreignKey: 'fk_Usuario_id' });
        }
    }
    Registros.init({
        id_registro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endpoint: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        metodo: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        parametros: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        resposta: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        fk_Usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Registros',
        timestamps: false,
    });
    return Registros;
};
//# sourceMappingURL=registros.js.map