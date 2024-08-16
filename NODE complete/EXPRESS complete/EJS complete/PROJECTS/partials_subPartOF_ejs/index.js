const express = require('express');
const app = express();
const path = require('path');
app.listen(3100, () => {
    console.log("Listening on 3100...")
});
app.use(express.static('Public_assets'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) =>{
    res.render('home')
})
app.get('/r/home', (req, res) => {
    res.render('home');
})
app.get('/r/academics', (req, res) => {
    res.render('Academics');
})
app.get('/r/datascience', (req, res) => {
    res.render('DataScience');
})
app.get('/r/development', (req, res) => {
    res.render('Devlopment');
})
app.get('/r/programming', (req, res) => {
    res.render('Programming');
})
app.get('/r/interface-less', (req, res) => {
    res.render('Interface-less');
})