const req = new XMLHttpRequest();
// this is an old way tha't why doesn't support latest syntaxes and the features of JavaScript
req.onload = function () {
    console.log("it worked!!!");
    const dataTaking = JSON.parse(this.responseText);
    console.log(dataTaking);
    console.log(this)
};

req.onerror = function () {
    console.log('uh ho');
    console.log(this);
};
req.onloadend = function () {
    console.log('this data parsed after the response loaded, ufff oh uhhhh sucks!!!');
    console.log(this.responseURL, this.status, this.responseXML);
};

req.open("GET", "https://swapi.dev/api/people/1");
req.send();