import { Model, DataTypes } from 'sequelize';

interface DoacaoAttributes {
  id_doacao: number;
  doador: string;
  produto: string;
  quantidade: number;
  data: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Doacao extends Model<DoacaoAttributes> {
    static associate(models: any) {
      // Definir as associações aqui
    }
  }

  Doacao.init(
    {
      id_doacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      doador: {
        type: DataTypes.STRING(100),
        allowNull: false,
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
    },
    {
      sequelize,
      modelName: 'Doacao',
    }
  );

  return Doacao;
};
