const express = require('express');
const router = express.Router();
const path = require('path');

const controllerAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controlleradmin'));

router.get('/administrar', controllerAdmin.administrar);
router.get('/productAdd', controllerAdmin.add);
router.get('/edit', controllerAdmin.edit);




module.exports = router;