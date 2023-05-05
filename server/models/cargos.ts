import { Model } from 'sequelize'
interface AtributosCargo {
  id: number,
  cargo: string,
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Cargo extends Model <AtributosCargo> 
  implements AtributosCargo{
    id!: number;
    cargo!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;
    
    static associate(models: any) {
      // define association here
    }
  }
  Cargo.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      cargo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Cargo',
    }
  );
  return Cargo;
};