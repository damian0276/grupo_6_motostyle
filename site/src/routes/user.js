const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../database/models');
const User = db.User;
const registerAuth = require("../middlewares/route/registerAuth");
const {
    check,
    validationResult,
    body
} = require('express-validator');


//Debo requerir nuestro controlador
const controllerUser = require(path.resolve(__dirname, '..', 'controllers', 'controllerUser'));

//Armo mis rutas
router.get('/register', controllerUser.register);
router.get('/passwordRecovery', controllerUser.passwordRecovery);
router.get('/buy/:id', controllerUser.buy); 
router.post('/register', registerAuth, controllerUser.create);


module.exports = router;
