const controladorPessoa = require('../controllers/pessoa');
const rotaPessoa = require('express').Router();

rotaPessoa.get('/todas', controladorPessoa.mostrarTodasPessoas)
rotaPessoa.post('/adicionar', controladorPessoa.adicionarPessoa)
rotaPessoa.put('/atualizar/:id', controladorPessoa.atualizarPessoa)
rotaPessoa.delete('/deletar/:id', controladorPessoa.deletarPessoa)
rotaPessoa.post('/:id', controladorPessoa.mostrarPessoaPorId)

module.exports = rotaPessoa;