import { Model } from "sequelize";
import bcrypt from "bcrypt";

interface AtributosUsuario {
  id: number;
  login: string;
  senha: string;
  pessoa_id: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<AtributosUsuario> implements AtributosUsuario {
    id!: number;
    login!: string;
    senha!: string;
    pessoa_id!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;

    static associate(models: any) {
      // Corrija o uso do modelo Endereco e ajuste o nome do modelo no parâmetro
      Usuario.belongsTo(models.Pessoa, { foreignKey: "pessoa_id" });
      Usuario.hasMany(models.Request, { foreignKey: 'usuario_id'});
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
        type: DataTypes.STRING,
        allowNull: false
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value: string) {
          const hash = bcrypt.hashSync(value, 10);
          this.setDataValue("senha", hash);
        },
      },
      pessoa_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );

  return Usuario;
};
