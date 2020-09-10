exports.getIndex = (reg, res, next) => {
  res.render('pages/index', {
    pageTitle: 'Jeff Ripke | Portfolio',
    path: '/home'
  });
}
