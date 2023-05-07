import { Model } from 'sequelize';

interface AtributosEstadoCivil {
  id: number;
  estadoCivil: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class EstadoCivil extends Model<AtributosEstadoCivil> implements AtributosEstadoCivil {
    id!: number;
    estadoCivil!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;

    static associate(models: any) {
      EstadoCivil.hasMany(models.Pessoa, { foreignKey: 'estadocivil_id' });
    }
  }

  EstadoCivil.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      estadoCivil: {
        type: DataTypes.STRING(20),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'EstadoCivil',
    }
  );

  return EstadoCivil;
};
