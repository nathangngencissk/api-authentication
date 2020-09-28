const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
const userController = require('../controllers/user')();

const User = require('../models/User.js');

router.get('/', userController.getAll);
router.post('/add', userController.add);
router.put('/edit/:id', userController.edit);
router.delete('/delete/:id', userController.delete);

module.exports = router;