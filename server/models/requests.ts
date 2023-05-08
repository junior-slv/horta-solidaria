import { Sequelize, Model, DataTypes } from 'sequelize';

interface RequestAttributes {
  id: number;
  operacao: string;
  url: string;
  timestamp: Date;
  usuario_id: string;
}

module.exports = (sequelize: Sequelize) => {
  class Request extends Model<RequestAttributes> implements RequestAttributes {
    id!: number;
    operacao!: string;
    url!: string;
    timestamp!: Date;
    usuario_id!: string;
    static associate(models: any) {
      Request.belongsTo(models.Usuario, { foreignKey: 'usuario_id'});

    }
  }

  Request.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      operacao: {
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
      usuario_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },

    },
    {
      sequelize,
      modelName: 'Request',
      tableName: 'Requests',
      timestamps: false,
    }
  );

  return Request;
};
