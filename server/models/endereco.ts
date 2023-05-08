import { Model } from "sequelize";
import bcrypt from "bcrypt";

interface AtributosEndereco {
  id: number;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  estado_id: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Endereco extends Model<AtributosEndereco> implements AtributosEndereco {
    id!: number;
    rua!: string;
    numero!: string;
    complemento!: string;
    bairro!: string;
    estado_id!: string;

    readonly createdAt!: string;
    readonly updatedAt!: string;

    static associate(models: any) {
      // Corrija o uso do modelo Endereco e ajuste o nome do modelo no parâmetro
      Endereco.belongsTo(models.Estado, { foreignKey: "estado_id" });
    }
  }

  Endereco.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      rua: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      numero: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      complemento: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      bairro: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      estado_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Endereco",
    }
  );

  return Endereco;
};
