const express = require('express');
const router = express.Router();
const path = require('path');
const { runInContext } = require('vm');

//Debo requerir nuestro controlador
const controllerWeb = require(path.resolve(__dirname, '..', 'controllers', 'controllerWeb'));

//Armo mis rutas
router.get('/', controllerWeb.index);
router.get('/nosotros', controllerWeb.nosotros);
router.get('/sucursales', controllerWeb.sucursales);
router.get('/contacto', controllerWeb.contacto);

module.exports = router;
