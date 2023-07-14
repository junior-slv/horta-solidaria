"use strict";
const authlogin = require('../controllers/usuariosControlador');
const rotaAuth = require('express').Router();
rotaAuth.post('/logar', authlogin.logarUsuario);
module.exports = rotaAuth;
//# sourceMappingURL=authRotas.js.map