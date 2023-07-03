"use strict";
const hortaControlador = require('../controllers/hortaControlador');
const rotaHorta = require('express').Router();
rotaHorta.get('/todas', hortaControlador.todasHortas);
rotaHorta.post('/adicionar', hortaControlador.adicionarHorta);
rotaHorta.put('/atualizar/:id', hortaControlador.atualizarHorta);
rotaHorta.delete('/deletar/:id', hortaControlador.deletarHorta);
module.exports = rotaHorta;
//# sourceMappingURL=rotaHorta.js.map