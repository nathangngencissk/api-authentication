const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permission')();

router.get('/', permissionController.getAll);
router.post('/add', permissionController.add);
router.put('/edit/:id', permissionController.edit);
router.delete('/delete/:id', permissionController.delete);

module.exports = router;