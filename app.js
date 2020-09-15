const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./utilities/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const pageRoutes = require('./routes/pages');
const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRoutes);
app.use('/', adminRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3500);
});
