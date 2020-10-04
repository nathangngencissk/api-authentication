const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')();
const auth = require('../middleware/auth')

router.get('/', userController.getAll);
router.post('/add', userController.add);
router.put('/edit/:id', userController.edit);
router.delete('/delete/:id', userController.delete);
router.get('/:id/permissions', auth(), userController.getPermissions);

module.exports = router;