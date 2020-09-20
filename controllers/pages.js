const Photo = require('../models/photo');

exports.getIndex = (reg, res, next) => {
  res.render('pages/index', {
    pageTitle: 'Jeff A Ripke | Portfolio',
    path: '/home',
  });
};

exports.getPhoto = (req, res, next) => {
  const photoId = req.params.photoId;
  Photo.findById(photoId)
    .then(photo => {
      res.render('photo-project/main/photo-details', {
        photo: photo,
        pageTitle: photo.fileName,
        path: '/photos'
      });
    });
}

exports.getPhotos = (reg, res, next) => {
  Photo.find()
    .then(photos => {
      res.render('photo-project/main/photos', {
        photos: photos,
        pageTitle: 'Jeff A. Ripke | Photos',
        path: '/photo-project',
      });
    })
};

exports.postList = (req, res, next) => {
  const photoId = req.body.photoId;
  Photo.findById(photoId)
    .then(photo => {
      return req.user.addToList(photo);
    })
    .then(result => {
      console.log(result);
    })
}
