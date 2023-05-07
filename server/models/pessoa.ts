import { Model } from 'sequelize'
interface AtributosPessoa{
  id: number;
  nome: string;
  email: string;
  cpf: string;
  datanascimento: string;
  endereco_id: number;
  telefone_id: number;
  estadocivil_id: number;
  genero_id: number;
  etnia_id: number;
  dependentes: number;
  rendafamiliar: number;
  telefonerecado: string;
  objetivo: string;
  horta_id: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Pessoa extends Model <AtributosPessoa>
  implements AtributosPessoa {
    id!: number;
    nome!: string;
    email!: string;
    cpf!: string;
    datanascimento!: string;
    endereco_id!: number;
    telefone_id!: number;
    estadocivil_id!: number;
    genero_id!: number;
    etnia_id!: number;
    dependentes!: number;
    rendafamiliar!: number;
    telefonerecado!: string;
    objetivo!: string;
    horta_id!: number;
    static associate(models: any) {
      Pessoa.belongsTo(models.Endereco, { foreignKey: 'endereco_id'});
      Pessoa.belongsTo(models.Telefone, { foreignKey: 'telefone_id'});
      Pessoa.belongsTo(models.EstadoCivil, { foreignKey: 'estadocivil_id'});
      Pessoa.belongsTo(models.Genero, { foreignKey: 'genero_id'});
      Pessoa.belongsTo(models.Etnia, { foreignKey: 'etnia_id'});
      Pessoa.belongsTo(models.Horta, { foreignKey: 'horta_id'});
    }
  }
  Pessoa.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    datanascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endereco_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    telefone_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    estadocivil_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    genero_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    etnia_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    dependentes: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    rendafamiliar: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    telefonerecado: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    objetivo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    horta_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    }
  },
   {
    sequelize,
    modelName: 'Pessoa',
  });
  return Pessoa;
};