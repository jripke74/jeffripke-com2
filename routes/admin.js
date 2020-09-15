const express = require('express');

const pageController = require('../controllers/admin');

const router = express.Router();

router.get('/photo-base/admin/photos', pageController.getAdminPhotos);

router.get('/photo-base/add-photo', pageController.getAddPhoto);

router.get('/photo-base/:photoId', pageController.getAdminPhoto);

router.post('/add-photo', pageController.postAddPhoto);

router.get('/photo-base/admin/edit-photo/:photoId', pageController.getEditPhoto);

router.post('/edit-product', pageController.postEditProduct);

module.exports = router;
