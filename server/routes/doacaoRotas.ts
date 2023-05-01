const doacaoControlador = require('../controllers/doacaoControlador');
const rotaDoacao = require('express').Router();

rotaDoacao.get('/todas', doacaoControlador.todosDoacao)

module.exports = rotaDoacao;