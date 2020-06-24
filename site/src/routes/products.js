const express = require('express');
const router = express.Router();
const path = require('path');

//Debo requerir nuestro controlador
const controllerProduct = require(path.resolve(__dirname, '..', 'controllers', 'controllerProduct'));

router.get('/productCart', controllerProduct.cart)
router.get('/productDetail', controllerProduct.detail)

module.exports = router;