const express = require('express');
const router = express.Router();
const path = require('path');
// ----------------Middlewares--------------------
const multer = require('multer');
const adminOnly = require('../middlewares/route/adminOnly');
const sudoOnly = require('../middlewares/route/sudoOnly');
//const productAuth = require('../middlewares/route/productAuth');
//const productAddAuth = require('../middlewares/route/productAddAuth');
const validator = require('../middlewares/route/validator');
// ----------------Database Models ---------------
const db = require('../database/models');
const User = db.User;
const Product = db.Product;

//Aquí dispongo lo referido al nombre del arhivo y a donde se va a guardar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', '..', 'public', 'asset', 'img', 'productos'));
  },
  filename: function (req, file, cb) {
    cb(null, 'moto-' + (Math.random().toString(36)+'00000000000000000').slice(2, 10) + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage })

const controllerAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controlleradmin'));

router.get('/administrar', adminOnly, controllerAdmin.administrar);
router.get('/productAdd', adminOnly, controllerAdmin.add);
router.get('/edit/:id', adminOnly, controllerAdmin.edit);
router.put('/edit/:id', upload.any(), adminOnly, validator.productEdit , controllerAdmin.update);
router.post('/administrar/create', upload.any(), adminOnly, validator.productAdd, controllerAdmin.create);
router.delete('/delete/:id', adminOnly, controllerAdmin.destroy);

//Rutas para administrar usuaruios
router.get('/adminUser', sudoOnly, controllerAdmin.adminUser);
router.put('/editUserProfile/:id', sudoOnly, controllerAdmin.editUserProfile);
router.delete('/deleteUser/:id', sudoOnly, controllerAdmin.deleteUser);
router.get('/adminUserDetail/:id', sudoOnly, controllerAdmin.userShow);

module.exports = router;
