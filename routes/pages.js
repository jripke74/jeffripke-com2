const express = require('express');

const pageController = require('../controllers/pages');

const router = express.Router();

router.get('/', pageController.getIndex);

module.exports = router;
