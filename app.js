const express = require('express');
const app = express();
//pug
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index.pug', { pageTitle: 'cool engine' });
});




module.exports = app;

