const mongodb = require('mongodb');
const Photo = require('../models/photo');

const ObjectId = mongodb.ObjectID;

exports.getAdminPhotos = (reg, res, next) => {
  Photo.fetchAll().then((photos) => {
    res.render('photo-project/admin/photos', {
      photos: photos,
      pageTitle: 'Jeff A. Ripke | Photos',
      path: '/photo-project',
    });
  });
};

exports.getAdminPhoto = (req, res, next) => {
  const photoId = req.params.photoId;
  Photo.findById(photoId).then((photo) => {
    res.render('photo-project/main/photo-details', {
      photo: photo,
      pageTitle: photo.fileName,
      path: '/photos',
    });
  });
};

exports.getAddPhoto = (req, res, next) => {
  res.render('photo-project/admin/edit-photo', {
    pageTitle: 'Add Photo',
    path: '/pages/add-photo',
    editing: false,
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
    .then((result) => {
      console.log('Created Photo entry');
      res.redirect('photos');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditPhoto = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const photoId = req.params.photoId;
  Photo.findById(photoId)
    .then((photo) => {
      if (!photo) {
        return res.redirect('/');
      }
      res.render('photo-project/admin/edit-photo', {
        pageTitle: 'Edit Photo',
        path: '/admin/edit-product',
        editing: editMode,
        photo: photo,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditPhoto = (req, res, next) => {
  const photoId = req.body.photoId;
  const updatedFileName = req.body.fileName;
  const updatedPhotoUrl = req.body.photoUrl;
  const updatedDateTimeTaken = req.body.dateTimeTaken;
  const updatedLocation = req.body.location;
  const photo = new Photo(
    updatedFileName,
    updatedPhotoUrl,
    updatedDateTimeTaken,
    updatedLocation,
    new ObjectId(photoId)
  );
  photo
    .save()
    .then((result) => {
      console.log('UPDATED PHOTO!');
      res.redirect('photos');
    })
    .catch((err) => console.log(err));
};
