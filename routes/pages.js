const express = require('express');

const pageController = require('../controllers/pages');

const router = express.Router();

router.get('/', pageController.getIndex);

router.get('/photo-project', pageController.getPhotoProject);

module.exports = router;
