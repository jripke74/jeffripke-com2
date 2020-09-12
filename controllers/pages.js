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
      res.render('pages/photo-details', {
        photo: photo,
        pageTitle: photo.fileName,
        path: '/photos'
      });
    });
}

exports.getPhotoProject = (reg, res, next) => {
  Photo.fetchAll()
    .then(photos => {
      res.render('pages/photo-project', {
        photos: photos,
        pageTitle: 'Jeff A. Ripke | Photos',
        path: '/photo-project',
      });
    })
};

exports.getAddPhoto = (req, res, next) => {
  res.render('pages/edit-photo', {
    pageTitle: 'Add Photo',
    path: '/pages/add-photo',
    editing: false
  });
};

exports.postAddPhoto = (req, res, next) => {
  const fileName = req.body.fileName;
  const photoUrl = req.body.photoUrl;
  const dateTimeTaken = req.body.dateTimeTaken;
  const location = req.body.location;
  const photo = new Photo(fileName, photoUrl, dateTimeTaken, location);
  photo
    .save()
    .then(result => {
      console.log('Created Photo entry');
      res.redirect('/photo-project');
    })
    .catch(err => {
      console.log(err);
    });
};


