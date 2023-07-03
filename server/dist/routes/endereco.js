"use strict";
const endereco = require('../controllers/endereco');
const rotaEndereco = require('express').Router();
// Rota para listar todos os endereços
rotaEndereco.get('/enderecos', endereco.listarEnderecos);
module.exports = rotaEndereco;
//# sourceMappingURL=endereco.js.map