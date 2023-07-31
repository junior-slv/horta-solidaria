"use strict";
const doacaoControlador = require('../controllers/doacaoControlador');
const rotaDoacao = require('express').Router();
rotaDoacao.get('/todas', doacaoControlador.todosDoacao);
rotaDoacao.post('/adicionar', doacaoControlador.adicionarDoacao);
rotaDoacao.put('/atualizar/:id', doacaoControlador.atualizarDoacao);
rotaDoacao.delete('/deletar/:id', doacaoControlador.deletarDoacao);
module.exports = rotaDoacao;
//# sourceMappingURL=doacaoRotas.js.map