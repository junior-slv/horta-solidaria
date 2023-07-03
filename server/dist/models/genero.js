"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Genero extends sequelize_1.Model {
        static associate(models) {
            Genero.hasMany(models.Pessoa, {
                foreignKey: 'fk_Genero_id',
                onDelete: 'CASCADE',
            });
        }
    }
    Genero.init({
        id_genero: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        genero: DataTypes.STRING(50),
    }, {
        sequelize,
        modelName: 'Genero',
        timestamps: false,
    });
    return Genero;
};
//# sourceMappingURL=genero.js.map