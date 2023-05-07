import { Model } from 'sequelize';

interface AtributosHorta {
  id: number;
  horta: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Horta extends Model<AtributosHorta> implements AtributosHorta {
    id!: number;
    horta!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;

    static associate(models: any) {
      Horta.hasMany(models.Pessoa, { foreignKey: 'horta_id' });
    }
  }

  Horta.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      horta: {
        type: DataTypes.STRING(30),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Horta',
    }
  );

  return Horta;
};
