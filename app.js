const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const pageRoutes = require('./routes/pages');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRoutes);

app.listen(3500);