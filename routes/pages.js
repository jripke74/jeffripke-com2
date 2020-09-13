const express = require('express');

const pageController = require('../controllers/pages');

const router = express.Router();

router.get('/', pageController.getIndex);

router.get('/photo-base', pageController.getPhotos);

router.get('/photo-base/add-photo', pageController.getAddPhoto);

router.post('/photo-base/add-photo', pageController.postAddPhoto);

router.get('/photo-base/:photoId', pageController.getPhoto);

router.get('/photo-base/admin/photos', pageController.getAdminPhotos);

module.exports = router;
