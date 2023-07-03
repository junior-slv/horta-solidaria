import { Model, Sequelize, DataTypes } from 'sequelize';

interface TelefonesAttributes {
  id_telefone: number;
  telefone: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Telefones extends Model<TelefonesAttributes> {
    static associate(models: any) {
    }
  }

  Telefones.init(
    {
      id_telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      telefone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Telefones',
    }
  );

  return Telefones;
};
