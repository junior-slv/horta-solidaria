"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Endereco extends sequelize_1.Model {
        static associate(models) {
        }
    }
    Endereco.init({
        id_endereco: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        rua: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        numero: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        bairro: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        complemento: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        pais: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        cep: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Endereco',
    });
    return Endereco;
};
//# sourceMappingURL=endereco.js.map