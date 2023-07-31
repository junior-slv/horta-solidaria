import { Model, DataTypes } from 'sequelize';

interface EstadoCivilAttributes {
  id_estadoCivil: number;
  estadoCivil: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Estado_Civil extends Model<EstadoCivilAttributes> {
    static associate(models: any) {
      Estado_Civil.hasMany(models.Pessoa, {
        foreignKey: 'fk_Estado_Civil_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Estado_Civil.init(
    {
      id_estadoCivil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      estadoCivil: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Estado_Civil',
      timestamps: false,
    }
  );

  return Estado_Civil;
};
