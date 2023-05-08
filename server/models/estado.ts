import { Model } from 'sequelize';

interface AtributosEstado {
  id: number;
  estado: string;
  uf: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Estado extends Model<AtributosEstado> implements AtributosEstado {
    id!: number;
    estado!: string;
    uf!: string;

    static associate(models: any) {
      Estado.hasMany(models.Endereco, { foreignKey: 'estado_id' });
    }
  }

  Estado.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      estado: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      uf: {
        type: DataTypes.STRING(2),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Estado',
      timestamps: false,
    }
  );

  return Estado;
};
