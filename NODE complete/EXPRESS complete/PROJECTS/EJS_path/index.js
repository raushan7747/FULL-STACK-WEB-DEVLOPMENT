const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// No matter where you are, just needed a relative path from there where you are executing JavaScript from
app.set('views', path.join(__dirname, '../../EJS complete/PROJECTS/ejs_path/views'));

app.get('/', (req, res) => {
    res.render('home');
});
app.listen(3200, () => {
    console.log("Listening on port: 3200");
});