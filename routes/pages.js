const express = require('express');

const pageController = require('../controllers/pages');

const router = express.Router();

router.get('/', pageController.getIndex);

router.get('/photo-project', pageController.getPhotoProject);

router.get('/add-photo', pageController.getAddPhoto);

router.post('/add-photo', pageController.postAddPhoto);

module.exports = router;
