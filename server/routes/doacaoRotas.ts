const doacaoControlador = require('../controllers/doacaoControlador');
const rotaDoacao = require('express').Router();

rotaDoacao.get('/todas', doacaoControlador.todosDoacao)
rotaDoacao.post('/adicionar', doacaoControlador.adicionarDoacao)

module.exports = rotaDoacao;