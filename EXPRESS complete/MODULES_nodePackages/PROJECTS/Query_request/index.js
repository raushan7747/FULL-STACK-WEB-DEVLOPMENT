const express = require('express');
const app = express();
// WHEN USER HITS YOUR ADDRESS YOU'LL LISTEN THE USER REQUEST ON THIS PORT
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});
// TAKING REQUESTS FROM THE QUERY-STRING
app.get('/search', (req, res) => {
    const { query_string } = req.query;
    if (!query_string) {
        res.send('<h1>He he 🤣🤣 You did not yet search anything!!!</h1>');
    }
    res.send(`<h1>You've searched for: ${query_string}, something else are you looking for???</h1>`);
});