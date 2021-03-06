const express = require('express');
const router = express.Router();
const logController = require('../controllers/log')();

router.get('/', logController.getAll);

module.exports = router;