const objetivoControlador = require('../controllers/objetivoControlador');
const rotaObjetivo = require('express').Router();

rotaObjetivo.get('/todos', objetivoControlador.todosObjetivos)
rotaObjetivo.post('/adicionar', objetivoControlador.adicionarHorta)
rotaObjetivo.put('/atualizar/:id', objetivoControlador.atualizarHorta)
rotaObjetivo.delete('/deletar/:id', objetivoControlador.deletarHorta)

module.exports = rotaObjetivo;