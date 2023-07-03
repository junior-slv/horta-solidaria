import { Model, DataTypes } from 'sequelize';

interface ObjetivoAttributes {
  id_objetivo: number;
  objetivo: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Objetivo extends Model<ObjetivoAttributes> {
    static associate(models: any) {
      Objetivo.hasMany(models.Pessoa, { foreignKey: 'fk_Objetivo_id' });
    }
  }

  Objetivo.init(
    {
      id_objetivo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      objetivo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Objetivo',
      timestamps: false,
    }
  );

  return Objetivo;
};
