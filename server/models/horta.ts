import { Model, Sequelize, DataTypes } from 'sequelize';

interface HortaAttributes {
  id_horta: number;
  nome: string;
  tamanho: string;
  descricao: string;
  fk_Pessoa_id: string; // Update the type to string for UUID
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
      nome: DataTypes.STRING(100),
      tamanho: DataTypes.STRING(100),
      descricao: DataTypes.STRING(100),
      fk_Pessoa_id: DataTypes.UUID,
      fk_Endereco_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Horta',
    }
  );

  return Horta;
};
