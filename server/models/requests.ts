import { Sequelize, Model, DataTypes } from 'sequelize';

interface RequestAttributes {
  id: number;
  method: string;
  url: string;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: Sequelize) => {
  class Request extends Model<RequestAttributes> implements RequestAttributes {
    public id!: number;
    public method!: string;
    public url!: string;
    public timestamp!: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

  Request.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      method: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Request',
      tableName: 'Requests',
    }
  );

  return Request;
};
