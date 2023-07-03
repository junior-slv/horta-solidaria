'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('Pessoas', {
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('Pessoas');
        });
    }
};
//# sourceMappingURL=20230625050625-create-pessoa.js.map