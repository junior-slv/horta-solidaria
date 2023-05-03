const pessoaControlador = require('../controllers/pessoaControlador');
const rotaPessoa = require('express').Router();

rotaPessoa.get('/todas', pessoaControlador.todasPessoas)
rotaPessoa.post('/adicionar', pessoaControlador.adicionarPessoa)

module.exports = rotaPessoa;