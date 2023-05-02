import { Model, DataTypes } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class Pessoa extends Model {
    static associate(models: any) {

    }
  }
  Pessoa.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      cpf: {
        type: DataTypes.STRING,
        unique: true,
      },
      dataNascimento: DataTypes.STRING,
      genero: DataTypes.STRING,
      etnia: DataTypes.STRING,
      estadoCivil: DataTypes.STRING,
      telefone: DataTypes.STRING,
      dependentes: DataTypes.INTEGER,
      rendaFamiliar: DataTypes.STRING,
      telefoneRecado: DataTypes.STRING,
      objetivo: DataTypes.STRING,
      horta: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoa",
    }
  );
  return Pessoa;
};
