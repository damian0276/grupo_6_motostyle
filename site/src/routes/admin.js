const express = require('express');
const router = express.Router();
const path = require('path');

const controllerAdmin = require(path.resolve(__dirname, '..', 'controllers', 'controlleradmin'));

router.get('/productAdd', controllerAdmin.add)

module.exports = router;