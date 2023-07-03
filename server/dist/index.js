"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const models_1 = __importDefault(require("./models"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var corsOptions = {
    origin: "http://localhost:3000",
};
const { Sequelize } = require('sequelize');
const CargoModel = require('./models/cargo');
const DoacaoModel = require('./models/doacao');
const EnderecoModel = require('./models/endereco');
const EstadoCivilModel = require('./models/estado_civil');
const EtniaModel = require('./models/etnia');
const GeneroModel = require('./models/genero');
const HortaModel = require('./models/horta');
const ObjetivoModel = require('./models/objetivo');
const RegistrosModel = require('./models/registros');
const TelefoneModel = require('./models/telefones');
const UsuarioModel = require('./models/usuario');
//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    console.log("deu erro gordao");
    res.status(500).send('Ocorreu um erro no servidor');
});

//rotas
const rotaDoacao = require('./routes/doacaoRotas');
app.use('/api/doacao', rotaDoacao);
const rotaPessoa = require('./routes/pessoa');
app.use('/api/pessoa', rotaPessoa);
const rotaEndereco = require('./routes/endereco');
app.use('/api/endereco', rotaEndereco);
const rotaUsuario = require('./routes/rotaUsuario');
app.use('/api/usuario', rotaUsuario);
const rotaHorta = require('./routes/rotaHorta');
app.use('/api/horta', rotaHorta);
const rotaObjetivo = require('./routes/rotaObjetivo');
app.use('/api/objetivo', rotaObjetivo);


async function syncDatabase() {
    try {
      const sequelize = new Sequelize('u756113144_hortaSolidaria', 'u756113144_junior', '$2y$11$yMAOYs.L1Qp3Hn6P3kpZ0OblpwIxybYA6I4tQL70BH86qIU48Czkq', {
        host: 'sql888.main-hosting.eu',
        dialect: 'mysql', // substitua pelo seu banco de dados
      });
  
      const Cargo = CargoModel(sequelize, Sequelize);
      const Doacao = DoacaoModel(sequelize, Sequelize);
      const Endereco = EnderecoModel(sequelize, Sequelize);
      const EstadoCivil = EstadoCivilModel(sequelize, Sequelize);
      const Etnia = EtniaModel(sequelize, Sequelize);
      const Genero = GeneroModel(sequelize, Sequelize);
      const Horta = HortaModel(sequelize, Sequelize);
      const Objetivo = ObjetivoModel(sequelize, Sequelize);
      const Registros = RegistrosModel(sequelize, Sequelize);
      const Telefone = TelefoneModel(sequelize, Sequelize);
      const Usuario = UsuarioModel(sequelize, Sequelize);
  
      // Defina as associações entre os modelos aqui
      // Cargo.associate({ ... });
      // Doacao.associate({ ... });
      // Endereco.associate({ ... });
      // ...
  
      await sequelize.sync({ force: false }); // definir `force` como true irá recriar as tabelas
  
      console.log('Banco de dados sincronizado com sucesso!');
    } catch (error) {
      console.error('Ocorreu um erro ao sincronizar o banco de dados:', error);
    }
  }
  
  syncDatabase();
app.get('/', (req, res) => {
    res.send('Bem-vindo à API da Horta Solidária!');
});
//# sourceMappingURL=index.js.map