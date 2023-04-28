import { Model, DataTypes } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model {
    static associate(models: any) {
      // Usuario.belongsTo(models.Cargo, { foreignKey: 'cargoId' });
    }
  }
  Usuario.init(
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
      login: {
        type: DataTypes.STRING,
        unique: true,
      },
      senha: DataTypes.STRING,
      horta: DataTypes.STRING,
      cargoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cargos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
