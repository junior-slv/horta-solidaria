'use strict';
import { Model } from 'sequelize'
interface CargoAtributos{
  id: number,
  nome: string,
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cargo extends Model<CargoAtributos> {

    static associate(models: any) {
      // define association here
    }
  }
  Cargo.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  }, {
    sequelize,
    modelName: 'Cargo',
  });
  return Cargo;
};
