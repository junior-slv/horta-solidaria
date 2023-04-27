'use strict';
interface UsuarioAtributos{
  id: number,
  nome: string,
  email: string,
  rua: string,

}
const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UsuarioAtributos> {

    static associate(models: any) {
      Usuario.belongsTo(models.Cargo, { foreignKey: 'cargoId' });
    }
  }
  Usuario.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true,
  },
  rua: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  bairro: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(256),
    allowNull: false,
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
  genero: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  etnia: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  estadoCivil: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dependentes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rendaFamiliar: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  telefoneRecado: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  objetivo: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  login: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  horta: {
    type: DataTypes.STRING(256),
    allowNull: true,
  },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};