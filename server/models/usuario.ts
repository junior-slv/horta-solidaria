import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

interface UsuarioAttributes {
  id_usuario: number;
  login: string;
  senha: string;
  fk_Cargo_id: number;
  fk_Pessoa_id: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UsuarioAttributes> {
    static associate(models: any) {
      Usuario.belongsTo(models.Cargo, { foreignKey: "fk_Cargo_id" });
      Usuario.belongsTo(models.Pessoa, { foreignKey: "fk_Pessoa_id" });
    }
  }

  Usuario.init(
    {
      id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      login: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
        set(value: string) {
          const hashedPassword = bcrypt.hashSync(value, 10);
          this.setDataValue('senha', hashedPassword);
        },
      },
      fk_Cargo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fk_Pessoa_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );

  return Usuario;
};
