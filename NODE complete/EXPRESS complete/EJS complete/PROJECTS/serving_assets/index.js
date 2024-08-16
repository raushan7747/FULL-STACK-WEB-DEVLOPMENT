// SERVING assets like html, css from the directory public_assets
const express = require('express');
const app = express();
const path = require('path');
app.listen(3100, () => {
    console.log('Listenning on port: 3100');
});
app.set('view engine', 'ejs');
// views directory is the default directory for the ejs pages
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public_assets')));
app.get('/ejs', (req, res) => {
    res.render('home');
});
