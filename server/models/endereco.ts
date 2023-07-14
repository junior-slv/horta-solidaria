import { Model, DataTypes } from 'sequelize';

interface EnderecoAttributes {
  id_endereco: number;
  rua: string;
  numero: string;
  bairro: string;
  complemento: string;
  cidade: string;
  pais: string;
  cep: string;
  estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Endereco extends Model<EnderecoAttributes> {
    static associate(models: any) {

    }
  }

  Endereco.init(
    {
      id_endereco: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rua: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      numero: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      bairro: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      complemento: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cidade: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      pais: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      cep: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Endereco',
    }
  );

  return Endereco;
};
