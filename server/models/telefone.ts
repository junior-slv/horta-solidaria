import { Model } from 'sequelize';

interface AtributosTelefone {
  id: number;
  telefone: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Telefone extends Model<AtributosTelefone> implements AtributosTelefone {
    id!: number;
    telefone!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;

    static associate(models: any) {
      Telefone.hasMany(models.Pessoa, { foreignKey: 'telefone_id' });
    }
  }

  Telefone.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      telefone: {
        type: DataTypes.STRING(11),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Telefone',
    }
  );

  return Telefone;
};
