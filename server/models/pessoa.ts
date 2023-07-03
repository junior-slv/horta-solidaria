import { Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

interface PessoaAttributes {
  id_pessoa: string;
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: Date;
  dependentes: number;
  rendaFamiliar: string;
  capacitacao: string;
  comercializar: string;
  fk_Objetivo_id: number;
  fk_Etnia_id: number;
  fk_Estado_Civil_id: number;
  fk_Telefones_id: number;
  fk_Genero_id: number;
  fk_Endereco_id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Pessoa extends Model<PessoaAttributes> {
    public id_pessoa!: string; // Add the property declaration here

    static associate(models: any) {
      Pessoa.belongsTo(models.Etnia, {
        foreignKey: 'fk_Etnia_id',
        onDelete: 'CASCADE',
      });
      Pessoa.belongsTo(models.Estado_Civil, {
        foreignKey: 'fk_Estado_Civil_id',
        onDelete: 'CASCADE',
      });
      Pessoa.belongsTo(models.Telefones, {
        foreignKey: 'fk_Telefones_id',
        onDelete: 'CASCADE',
      });
      Pessoa.belongsTo(models.Genero, {
        foreignKey: 'fk_Genero_id',
        onDelete: 'CASCADE',
      });
      Pessoa.belongsTo(models.Endereco, {
        foreignKey: 'fk_Endereco_id',
        onDelete: 'CASCADE',
      });
      Pessoa.belongsTo(models.Objetivo, {
        foreignKey: 'fk_Objetivo_id',
        onDelete: 'CASCADE',
      });
      Pessoa.belongsTo(models.Horta, {
        foreignKey: 'fk_Horta_id',
        onDelete: 'CASCADE',
      });
    }

    static initAssociations() {
      Pessoa.beforeCreate((pessoa) => {
        pessoa.id_pessoa = uuidv4();
      });
    }
  }

  Pessoa.init(
    {
      id_pessoa: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cpf: {
        type: DataTypes.STRING(14),
        allowNull: true,
      },
      dataNascimento: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      dependentes: {
        type: DataTypes.STRING(3),
        allowNull: true,
      },
      rendaFamiliar: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      capacitacao: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      comercializar: {
        type: DataTypes.STRING(100)
      },
      fk_Objetivo_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_Etnia_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_Estado_Civil_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_Telefones_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_Genero_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_Endereco_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Pessoa',
    }
  );

  Pessoa.initAssociations();

  return Pessoa;
};
