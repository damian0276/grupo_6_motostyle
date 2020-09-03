const express = require('express');
const router = express.Router();
const path = require('path');

const apiControllerUser = require(path.resolve(__dirname, '..','..', 'controllers', 'api',  'apiControllerUser'));

router.get('/apiUsersMsList', apiControllerUser.list);

module.exports = router;