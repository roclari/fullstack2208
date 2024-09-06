const express = require('express');
const { getAllCruds, updateCrud, deleteCrud } = require('../controllers/crudController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/cruds', authMiddleware, getAllCruds);
router.put('/cruds', authMiddleware, updateCrud);
router.delete('/cruds', authMiddleware, deleteCrud);

module.exports = router;
