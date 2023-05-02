import { Model } from 'sequelize'
import bcrypt from 'bcrypt';
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
    static async hashPassword(user: Usuario): Promise<void> {
      const saltRounds = 10;
      if (user.changed('senha')) {
        user.senha = await bcrypt.hash(user.senha, saltRounds);
      }
    
    
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
  Usuario.beforeSave(Usuario.hashPassword);

  return Usuario;
};