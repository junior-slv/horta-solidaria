const usuariosControlador = require('../controllers/usuariosControlador');
const rotaUsuario = require('express').Router();

rotaUsuario.get('/todos', usuariosControlador.todosUsuarios)
// rotaUsuario.post('/adicionar', usuariosControlador.adicionarDoacao)

module.exports = rotaUsuario;