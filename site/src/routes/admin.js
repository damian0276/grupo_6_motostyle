const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

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

router.get('/administrar', controllerAdmin.administrar);
router.get('/productAdd', controllerAdmin.add);
router.get('/edit', controllerAdmin.edit);
router.post('/administrar/createUno', controllerAdmin.createUno);
router.post('/administrar/createDos',upload.single(), controllerAdmin.createDos);






module.exports = router;