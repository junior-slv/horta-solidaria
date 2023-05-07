'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      datanascimento: {
        type: Sequelize.DATE
      },
      endereco_id: {
        type: Sequelize.INTEGER
      },
      telefone_id: {
        type: Sequelize.INTEGER
      },
      estadocivil_id: {
        type: Sequelize.INTEGER
      },
      genero_id: {
        type: Sequelize.INTEGER
      },
      etnia_id: {
        type: Sequelize.INTEGER
      },
      dependentes: {
        type: Sequelize.INTEGER
      },
      rendafamiliar: {
        type: Sequelize.DECIMAL
      },
      telefonerecado: {
        type: Sequelize.STRING
      },
      objetivo: {
        type: Sequelize.TEXT
      },
      horta_id: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pessoas');
  }
};