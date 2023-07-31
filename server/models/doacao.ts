import { Model, DataTypes } from 'sequelize';

interface DoacaoAttributes {
  id_doacao: number;
  produto: string;
  quantidade: number;
  data: string;
  fk_Pessoa_id: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Doacao extends Model<DoacaoAttributes> {
    static associate(models: any) {
      Doacao.belongsTo(models.Pessoa, { foreignKey: "fk_Pessoa_id" });
    }
  }

  Doacao.init(
    {
      id_doacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      produto: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fk_Pessoa_id: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Doacao',
    }
  );

  return Doacao;
};
