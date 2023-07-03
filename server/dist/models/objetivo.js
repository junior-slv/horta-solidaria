"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Objetivo extends sequelize_1.Model {
        static associate(models) {
            Objetivo.hasMany(models.Pessoa, { foreignKey: 'fk_Objetivo_id' });
        }
    }
    Objetivo.init({
        id_objetivo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        objetivo: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Objetivo',
        timestamps: false,
    });
    return Objetivo;
};
//# sourceMappingURL=objetivo.js.map