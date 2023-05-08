import { Model } from 'sequelize';

interface AtributosGenero {
  id: number;
  genero: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Genero extends Model<AtributosGenero> implements AtributosGenero {
    id!: number;
    genero!: string;

    static associate(models: any) {
      Genero.hasMany(models.Pessoa, { foreignKey: 'genero_id' });
    }
  }

  Genero.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      genero: {
        type: DataTypes.STRING(15),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Genero',
      timestamps: false,
    }
  );

  return Genero;
};
