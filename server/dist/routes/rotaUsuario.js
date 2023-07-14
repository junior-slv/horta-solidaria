"use strict";
const usuariosControlador = require('../controllers/usuariosControlador');
const rotaUsuario = require('express').Router();
rotaUsuario.get('/todos', usuariosControlador.todosUsuarios);
rotaUsuario.post('/adicionar', usuariosControlador.adicionarUsuario);
module.exports = rotaUsuario;
//# sourceMappingURL=rotaUsuario.js.map