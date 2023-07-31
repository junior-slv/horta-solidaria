import { Model, Sequelize, DataTypes } from 'sequelize';

interface HortaAttributes {
  id_horta: number;
  nome: string;
  tamanho: string;
  descricao: string;
  fk_Pessoa_id: string;
  fk_Endereco_id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Horta extends Model<HortaAttributes> {
    static associate(models: any) {
      Horta.belongsTo(models.Pessoa, {
        foreignKey: 'fk_Pessoa_id',
        onDelete: 'CASCADE',
      });
      Horta.belongsTo(models.Endereco, {
        foreignKey: 'fk_Endereco_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Horta.init(
    {
      id_horta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tamanho: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descricao: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fk_Pessoa_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      fk_Endereco_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Horta',
    }
  );

  return Horta;
};
