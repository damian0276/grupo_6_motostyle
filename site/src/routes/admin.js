const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminOnly = require('../middlewares/route/adminOnly');

//Aquí dispongo lo referido al nombre del arhivo y a donde se va a guardar
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','asset','img','productos'));
    }, 
    filename: function (req, file, cb) {
      cb(null, 'moto-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

const controllerAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controlleradmin'));

router.get('/administrar',adminOnly, controllerAdmin.administrar);
router.get('/productAdd',adminOnly, controllerAdmin.add);
router.get('/edit/:id',adminOnly, controllerAdmin.edit);
router.put('/edit/:id',upload.any(),adminOnly, controllerAdmin.update);
router.post('/administrar/create',upload.any(),adminOnly, controllerAdmin.create);
router.delete('/delete/:id',adminOnly, controllerAdmin.destroy);






module.exports = router;