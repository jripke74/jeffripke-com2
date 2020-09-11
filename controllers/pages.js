exports.getIndex = (reg, res, next) => {
  res.render('pages/index', {
    pageTitle: 'Jeff Ripke | Portfolio',
    path: '/home'
  });
};

exports.getPhotoProject = (reg, res, next) => {
  res.render('pages/photo-project', {
    pageTitle: 'Photo Project | Jeff A. Ripke',
    path: '/photo-project'
  });
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

};
