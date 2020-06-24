const express = require('express');
const router = express.Router();
const path = require('path');

//Debo requerir nuestro controlador
const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllerWeb'));

//Armo mis rutas
router.get('/', controllerWeb.index);

module.exports = router;
