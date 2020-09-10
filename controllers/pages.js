exports.getIndex = (reg, res, next) => {
  res.render('pages/index', {
    pageTitle: 'Jeff Ripke | Portfolio',
    path: '/home'
  });
}

exports.getPhotoProject = (reg, res, next) => {
  res.render('pages/photo-project', {
    pageTitle: 'Photo Project | Jeff A. Ripke',
    path: '/photo-project'
  });
}
