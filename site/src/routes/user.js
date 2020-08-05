const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../database/models');
const User = db.User;
const registerAuth = require("../middlewares/route/registerAuth");
const loginAuth = require("../middlewares/route/loginAuth");

const {
    check,
    validationResult,
    body
} = require('express-validator');
const multer = require('multer');

//Aquí dispongo lo referido al nombre del arhivo y a donde se va a guardar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','asset','img','users'));
    }, 
    filename: function (req, file, cb) {
      cb(null, 'avatar-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage });


//Debo requerir nuestro controlador
const controllerUser = require(path.resolve(__dirname, '..', 'controllers', 'controllerUser'));

//Armo mis rutas
router.get('/register', controllerUser.register);
router.get('/passwordRecovery', controllerUser.passwordRecovery);
router.get('/buy/:id', controllerUser.buy); 
router.post('/register', upload.single('avatar'),registerAuth, controllerUser.create);
router.post('/login',loginAuth,controllerUser.login);
router.get('/logOut', controllerUser.logOut)
router.get('/user/profile/:id', controllerUser.profile);
router.get('/login', controllerUser.loginViews); 
router.put("/user/update/:id",controllerUser.update);
module.exports = router;
