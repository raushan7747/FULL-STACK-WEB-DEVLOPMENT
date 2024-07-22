const express = require('express');
const app = express();
// WHEN USER HITS YOUR ADDRESS YOU'LL LISTEN THE USER REQUEST ON THIS PORT
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});
// EXPRESS PATH PARAMETERS
app.get('/path/:raushan/:portfolio/:searching', (req, res) => {
    const { raushan, portfolio, searching } = req.params; // distructing PARAMS object
    res.send(`You are searching ${portfolio} of ${raushan}, wait now I am ${searching}`);
});

// TO RESPONSE FOR THE ALL PATHS THAT WE DID'NT HAVE
app.get('*', (req, res) => {
    res.send('<h3>Please make sure you are on the right way!</h3>');
});

app.post('*', (req, res) => {
    res.send('<h3>Sorry! we did not have that you were requested<br>Please make sure you are on the right place!!!</h3>');
});