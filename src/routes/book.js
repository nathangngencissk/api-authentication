const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const Role = require('../models/Role');
const booksController = require('../controllers/book')();

router.get('/', auth(Role.Admin), booksController.getAll);

module.exports = router;

// curl -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjYyYTU5ZTYyN2QwMzAwMjA4ZDliYWUiLCJpYXQiOjE2MDAzNjc2NTYsImV4cCI6MTYwMDQ1NDA1Nn0.IA0YCr608HeVz1Ihk8ht1ibec7qmZQ24kKVTY63qsoI" -X GET http://localhost:9000/api/book/

// curl -H "Content-Type: application/json" -d '{"role":"Admin" }' -X PUT http://localhost:9000/api/user/edit/5f62a59e627d0300208d9bae