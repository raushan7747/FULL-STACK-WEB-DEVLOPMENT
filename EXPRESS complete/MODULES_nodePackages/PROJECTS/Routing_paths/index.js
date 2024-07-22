const express = require('express');
const app = express();
// WHEN USER HITS YOUR ADDRESS YOU'LL LISTEN THE USER REQUEST ON THIS PORT
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});
// ROUTING TO THE DIFFERENT PATHS FOR THE DIFFERENT RESPONSES
// GET - method
app.get('/submit', (req, res) => {
    res.send('<h1>You have submitted your request!!!</h1>');
});

// POST - method
app.post('/submit', (req, res) => {
    res.send('You have posted your request!!!');
});