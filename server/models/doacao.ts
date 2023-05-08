import { Model } from 'sequelize';

interface AtributosDoacao {
  id: number;
  doador: string;
  produto: string;
  quantidade: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Doacao extends Model<AtributosDoacao> implements AtributosDoacao {
    id!: number;
    doador!: string;
    produto!: string;
    quantidade!: string;

    static associate(models: any) {

    }
  }

  Doacao.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      doador: {
        type: DataTypes.STRING,
        allowNull: false
      },
      produto: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Doacao',
    }
  );

  return Doacao;
};
