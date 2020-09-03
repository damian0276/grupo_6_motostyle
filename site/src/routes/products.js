const express = require('express');
const router = express.Router();
const path = require('path');
const loggedOnly = require('../middlewares/route/loggedOnly');

//Debo requerir nuestro controlador
const controllerProduct = require(path.resolve(__dirname, '..', 'controllers', 'controllerProduct'));

router.get('/products', controllerProduct.index);
router.get('/productCart/:id?',loggedOnly, controllerProduct.cart);
router.get('/productDetail/:id', controllerProduct.detail);
router.get('/products/search_results', controllerProduct.search);

module.exports = router;

