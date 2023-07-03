"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Estado_Civil extends sequelize_1.Model {
        static associate(models) {
            Estado_Civil.hasMany(models.Pessoa, {
                foreignKey: 'fk_Estado_Civil_id',
                onDelete: 'CASCADE',
            });
        }
    }
    Estado_Civil.init({
        id_estadoCivil: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estadoCivil: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Estado_Civil',
        timestamps: false,
    });
    return Estado_Civil;
};
//# sourceMappingURL=estado_civil.js.map