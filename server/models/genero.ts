import { Model, DataTypes } from 'sequelize';

interface GeneroAttributes {
  id_genero: number;
  genero: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Genero extends Model<GeneroAttributes> {
    static associate(models: any) {
      Genero.hasMany(models.Pessoa, {
        foreignKey: 'fk_Genero_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Genero.init(
    {
      id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      genero: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: 'Genero',
      timestamps: false,
    }
  );

  return Genero;
};
