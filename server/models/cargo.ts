import { Model, DataTypes } from 'sequelize';

interface CargoAttributes {
  id_cargo: number;
  cargo: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Cargo extends Model<CargoAttributes> {
    static associate(models: any) {
      Cargo.hasMany(models.Usuario, { foreignKey: 'fk_Cargo_id' });
    }
  }

  Cargo.init(
    {
      id_cargo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cargo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Cargo',
      timestamps: false,
    }
  );

  return Cargo;
};
