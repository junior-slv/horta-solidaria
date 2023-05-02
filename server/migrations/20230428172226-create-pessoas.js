'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Pessoas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING(256),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(256),
      },
      rua: {
        type: DataTypes.STRING(256),
      },
      numero: {
        type: DataTypes.STRING(256),
      },
      complemento: {
        type: DataTypes.STRING(256),
      },
      bairro: {
        type: DataTypes.STRING(256),
      },
      cidade: {
        type: DataTypes.STRING(256),
      },
      estado: {
        type: DataTypes.STRING(256),
      },
      cpf: {
        type: DataTypes.STRING(256),
        unique: true
      },
      dataNascimento: {
        type: DataTypes.STRING(256),
      },
      genero: {
        type: DataTypes.STRING(256),
      },
      etnia: {
        type: DataTypes.STRING(256),
      },
      estadoCivil: {
        type: DataTypes.STRING(256),
      },
      telefone: {
        type: DataTypes.STRING(256),
      },
      dependentes: {
        type: Sequelize.INTEGER
      },
      rendaFamiliar: {
        type: DataTypes.STRING(256),
      },
      telefoneRecado: {
        type: DataTypes.STRING(256),
      },
      objetivo: {
        type: DataTypes.STRING(256),
      },  
      horta: {
        type: DataTypes.STRING(256),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pessoas');
  }
};