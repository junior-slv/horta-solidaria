'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pessoas', {
      id_pessoa: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
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
      dataNascimento: {
        type: Sequelize.STRING
      },
      dependentes: {
        type: Sequelize.STRING
      },
      rendaFamiliar: {
        type: Sequelize.STRING
      },
      capacitacao: {
        type: Sequelize.STRING
      },
      comercializar: {
        type: Sequelize.STRING
      },
      fk_Objetivo_id: {
        type: Sequelize.INTEGER
      },
      fk_Etnia_id: {
        type: Sequelize.INTEGER
      },
      fk_Estado_Civil_id: {
        type: Sequelize.INTEGER
      },
      fk_Telefones_id: {
        type: Sequelize.INTEGER
      },
      fk_Genero_id: {
        type: Sequelize.INTEGER
      },
      fk_Endereco_id: {
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