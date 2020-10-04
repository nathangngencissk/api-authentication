const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const Role = require('../models/Role');
const booksController = require('../controllers/book')();

router.get('/', auth('Admin'), booksController.getAll);

module.exports = router;