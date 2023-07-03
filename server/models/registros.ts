import { Model, Sequelize, DataTypes } from 'sequelize';

interface RegistrosAttributes {
  id_registro: number;
  data_hora: Date;
  endpoint: string;
  metodo: string;
  parametros: string;
  status: string;
  resposta: string;
  fk_Usuario_id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Registros extends Model<RegistrosAttributes> {
    static associate(models: any) {
      Registros.belongsTo(models.Usuario, { foreignKey: 'fk_Usuario_id' });
    }
  }

  Registros.init(
    {
      id_registro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_hora: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endpoint: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      metodo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      parametros: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      resposta: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fk_Usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Registros',
      timestamps: false,
    }
  );

  return Registros;
};
