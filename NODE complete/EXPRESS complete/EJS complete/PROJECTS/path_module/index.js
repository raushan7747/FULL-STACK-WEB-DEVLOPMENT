// when the javascript and views directory are on the same directory
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// executing this from outside or from anywhere(e.g., node PROJECTS/path_module/index.js)
app.set('views', path.join(__dirname, 'views'));
// executing this from same directory where views directory are present(e.g. node index.js)
// app.set('views'); 

app.get('/', (req, res) => {
    res.render('home');
});
app.listen(3200, () => {
    console.log("Listening on port: 3200");
});