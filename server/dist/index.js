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
    origin: "https://horta-solidaria.vercel.app",
};
const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).end();
    }
    try {
        jsonwebtoken_1.default.verify(token, 'chave_secreta');
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    next();
};
//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Ocorreu um erro no servidor');
});
// createEstadoCivil()
// createGenero()
// createEtnias()
// createCargos()
// createObjetivos()
// createPessoas()
//rotas
const rotaAuth = require('./routes/authRotas');
app.use('/api/auth', rotaAuth);
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
models_1.default.sequelize.sync({ maxTimeout: 30000 }).then(() => {
    app.listen(port, () => {
        console.log(`Rodando na porta: ${port}`);
    });
});
app.get('/', (req, res) => {
    res.send('Bem-vindo à API da Horta Solidária!');
});
//# sourceMappingURL=index.js.map