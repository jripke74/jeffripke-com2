const express = require('express');

const pageController = require('../controllers/pages');

const router = express.Router();

router.get('/', pageController.getIndex);

router.get('/photo-base', pageController.getPhotos);

router.get('/photo-base/:photoId', pageController.getPhoto);

router.post('/list', pageController.postList);

module.exports = router;
