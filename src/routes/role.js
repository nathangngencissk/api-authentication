const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role')();

router.get('/', roleController.getAll);
router.post('/add', roleController.add);
router.put('/edit/:id', roleController.edit);
router.delete('/delete/:id', roleController.delete);

module.exports = router;