import { Model } from 'sequelize';

interface AtributosEtnia {
  id: number;
  etnia: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Etnia extends Model<AtributosEtnia> implements AtributosEtnia {
    id!: number;
    etnia!: string;

    static associate(models: any) {
      Etnia.hasMany(models.Pessoa, { foreignKey: 'etnia_id' });
    }
  }

  Etnia.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      etnia: {
        type: DataTypes.STRING(50),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Etnia',
      timestamps: false,
    }
  );

  return Etnia;
};
