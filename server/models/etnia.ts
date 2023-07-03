import { Model, DataTypes } from 'sequelize';

interface EtniaAttributes {
  id_etnia: number;
  etnia: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Etnia extends Model<EtniaAttributes> {
    static associate(models: any) {
      Etnia.hasMany(models.Pessoa, {
        foreignKey: 'fk_Etnia_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Etnia.init(
    {
      id_etnia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      etnia: DataTypes.STRING(50),
    },
    {
      sequelize,
      modelName: 'Etnia',
      timestamps: false,
    }
  );

  return Etnia;
};
