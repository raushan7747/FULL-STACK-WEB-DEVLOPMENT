// IMPORT LIBRARIES OR FRAMEWORK OR ANY OTHER JAVASCRIPT SOURCE USING **require**
const express = require('express');
// TAKING ALL THE PROPERTIES AND METHODS OF THE **express** FRAMEWORK WHICH RETURNS **OBJECT**
const app = express();
// console.dir(app); // printing the object into the console

// WHEN USER HITS YOUR ADDRESS YOU'LL LISTEN THE USER REQUEST ON THIS PORT
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});

// TO RESPONSE THE USER WHEN HE MAKES EACH REQUEST
/*********->********->**********->*********->*********->*********->START
app.use((request, response) => {
    console.log("WE GOT A NEW REQUEST!!");
    // console.dir(request)
    // response.send('<h1>RESPONDING TO YOUR REQUEST !!!</h1>');
    // response.send({ "Name": "Raushan", "Author": "Raushan" });
});
********->********->**********->*********->*********->*********->END*/

// ROUTING TO THE DIFFERENT PATHS FOR THE DIFFERENT RESPONSES
/*********->********->**********->*********->*********->*********->START
// GET - method
app.get('/submit', (req, res) => {
    res.send('You have submitted your request!!!');
});
********->********->**********->*********->*********->*********->END*/

// EXPRESS PATH PARAMETERS
app.get('/path/:raushan/:portfolio/:searching', (req, res) => {
    const { raushan, portfolio, searching } = req.params; // distructing PARAMS object
    res.send(`You are searching ${portfolio} of ${raushan}, wait now I am ${searching}`);
});

// POST - method
app.post('/submit', (req, res) => {
    res.send('You have posted your request!!!');
});

// TAKING REQUESTS FROM THE QUERY-STRING
app.get('/search', (req, res) => {
    const { query_string } = req.query;
    if (!query_string) {
        res.send('<h1>He he 🤣🤣 You did not yet search anything!!!</h1>')
    }
    res.send(`<h1>You've searched for: ${query_string}, something else are you looking for???</h1>`)
})

// TO RESPONSE FOR THE ALL PATHS THAT WE DID'NT HAVE
app.get('*', (req, res) => {
    res.send('<h3>Please make sure you are on the right way!</h3>');
});

app.post('*', (req, res) => {
    res.send('<h3>Sorry! we did not have that you were requested<br>Please make sure you are on the right place!!!</h3>');
});

/**
 * TO AUTO RESTART YOUR SERVER YOU CAN USE THE LIBRARY NAMED "NODEMON", INSTALL THIS AS GLOBAL
 * npm i -g nodemon
 */