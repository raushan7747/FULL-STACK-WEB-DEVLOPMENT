// IMPORT LIBRARIES OR FRAMEWORK OR ANY OTHER JAVASCRIPT SOURCE-CODE WE USE **require** method()
const express = require('express');
// TAKING ALL THE PROPERTIES AND METHODS OF THE **express** FRAMEWORK WHICH RETURNS **OBJECT**
const app = express();
// console.dir(app); // printing the object into the console

// WHEN USER HITS YOUR ADDRESS YOU'LL LISTEN THE USER REQUEST ON THIS PORT
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});

// TO RESPONSE THE USER WHEN HE MAKES EACH REQUEST
app.use((request, response) => {
    console.log("WE GOT A NEW REQUEST!!");
    // console.dir(request)
    response.send('<h1>RESPONDING some HTML !!!</h1>');
    // response.send({ "Name": "Raushan", "Response": "User data" });
});
