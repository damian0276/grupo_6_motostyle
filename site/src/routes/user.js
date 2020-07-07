const express = require('express');
const router = express.Router();
const path = require('path');
const { runInContext } = require('vm');

//Debo requerir nuestro controlador
const controllerUser = require(path.resolve(__dirname, '..', 'controllers', 'controllerUser'));

//Armo mis rutas
router.get('/register', controllerUser.register);
router.get('/passwordRecovery', controllerUser.passwordRecovery);
module.exports = router;
