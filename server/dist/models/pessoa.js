"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
module.exports = (sequelize, DataTypes) => {
    class Pessoa extends sequelize_1.Model {
        static associate(models) {
            Pessoa.belongsTo(models.Etnia, {
                foreignKey: 'fk_Etnia_id',
                onDelete: 'CASCADE',
            });
            Pessoa.belongsTo(models.Estado_Civil, {
                foreignKey: 'fk_Estado_Civil_id',
                onDelete: 'CASCADE',
            });
            Pessoa.belongsTo(models.Telefones, {
                foreignKey: 'fk_Telefones_id',
                onDelete: 'CASCADE',
            });
            Pessoa.belongsTo(models.Genero, {
                foreignKey: 'fk_Genero_id',
                onDelete: 'CASCADE',
            });
            Pessoa.belongsTo(models.Endereco, {
                foreignKey: 'fk_Endereco_id',
                onDelete: 'CASCADE',
            });
            Pessoa.belongsTo(models.Objetivo, {
                foreignKey: 'fk_Objetivo_id',
                onDelete: 'CASCADE',
            });
            Pessoa.belongsTo(models.Horta, {
                foreignKey: 'fk_Horta_id',
                onDelete: 'CASCADE',
            });
        }
        static initAssociations() {
            Pessoa.beforeCreate((pessoa) => {
                pessoa.id_pessoa = (0, uuid_1.v4)();
            });
        }
    }
    Pessoa.init({
        id_pessoa: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        telefonerecado: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            unique: true,
        },
        dataNascimento: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        dependentes: {
            type: DataTypes.STRING(3),
            allowNull: false,
        },
        rendaFamiliar: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        capacitacao: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        comercializar: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        fk_Objetivo_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Etnia_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Estado_Civil_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Telefones_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Genero_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Endereco_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_Horta_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Pessoa',
    });
    Pessoa.initAssociations();
    return Pessoa;
};
//# sourceMappingURL=pessoa.js.map