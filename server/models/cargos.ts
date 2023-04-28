import { Model } from 'sequelize'
interface AtributosCargos{
  id: number,
  nome: string,
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Cargos extends Model <AtributosCargos>
  implements AtributosCargos{
    id!: number;
    nome!: string;
    static associate(models: any) {
      
    }
  }
  Cargos.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cargos',
  });
  return Cargos;
};