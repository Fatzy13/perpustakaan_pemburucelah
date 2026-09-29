const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllers');

router.get('/', bookController.index);

module.exports = router;