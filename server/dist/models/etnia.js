"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Etnia extends sequelize_1.Model {
        static associate(models) {
            Etnia.hasMany(models.Pessoa, {
                foreignKey: 'fk_Etnia_id',
                onDelete: 'CASCADE',
            });
        }
    }
    Etnia.init({
        id_etnia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        etnia: DataTypes.STRING(50),
    }, {
        sequelize,
        modelName: 'Etnia',
        timestamps: false,
    });
    return Etnia;
};
//# sourceMappingURL=etnia.js.map