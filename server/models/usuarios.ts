import { Model } from 'sequelize'
interface AtributosUsuario {
  id: number,
  login: string,
  senha: string,
  cargo: string,
  cpf: string,
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model <AtributosUsuario> 
  implements AtributosUsuario{
    id!: number;
    login!: string;
    senha!: string;
    cargo!: string;
    cpf!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;
    
    static associate(models: any) {

    }
  }
  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      login: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      cargo: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
    }
  );
  return Usuario;
};