"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cargo extends sequelize_1.Model {
        static associate(models) {
            Cargo.hasMany(models.Usuario, { foreignKey: 'fk_Cargo_id' });
        }
    }
    Cargo.init({
        id_cargo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cargo: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Cargo',
        timestamps: false,
    });
    return Cargo;
};
//# sourceMappingURL=cargo.js.map