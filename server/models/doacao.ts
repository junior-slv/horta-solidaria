import { Model } from 'sequelize'
interface AtributosDoacao {
  id: number,
  doador: string,
  produto: string,
  quantidade: number,
  data: string,
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Doacao extends Model <AtributosDoacao> 
  implements AtributosDoacao{
    id!: number;
    doador!: string;
    produto!: string;
    quantidade!: number;
    data!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;
    
    static associate(models: any) {
      // define association here
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
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      produto: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      data: {
        type: DataTypes.STRING(10),
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