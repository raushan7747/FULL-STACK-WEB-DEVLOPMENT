// AT A TIME ONLY ONE RESPONSE CAN BE SEND/RENDERED NOT MORE THAN ONE
const express = require('express');
const app = express();
const path = require('path')
const json = require('./data.json')
app.set('view engine', 'ejs');

app.listen(3200, () => {
    console.log('LISTENNING ON PORT: 3200')
});
app.set('views', path.join(__dirname, 'views'));
app.get('/r/:paramsFromInput', (req, res) => {
    // Storing the paramater into paramsFromInput given by user
    const { paramsFromInput } = req.params;
    // paramsFromInput-key will hold the value from parameter
    console.log({ paramsFromInput });
    // paramsFromInput-variable will have the value from the object key-value
    console.log(paramsFromInput);
    const data = json[paramsFromInput];
    if (data) {
        console.log(data);
        // spreading only one object as requested by user (e.g., Raushan, Rohan)
        res.render('data', { data });
        // spread the object into their properties to direct acess thier properties instead of the object
        // res.render('data', { ...data }); 
    } else {
        res.render('error', { paramsFromInput });
    }
});