'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Usuarios', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING
      },
      rua: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true
      },
      dataNascimento: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      etnia: {
        type: Sequelize.STRING
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      dependentes: {
        type: Sequelize.INTEGER
      },
      rendaFamiliar: {
        type: Sequelize.STRING
      },
      telefoneRecado: {
        type: Sequelize.STRING
      },
      objetivo: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING,
        unique: true
      },
      senha: {
        type: Sequelize.STRING
      },
      horta: {
        type: Sequelize.STRING
      },
      cargoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'cargos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('Usuarios');
  }
};