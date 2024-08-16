# Node.js complete
***
### To run, debug JavaScript indepedently from the browsers we can use *node* to run locally the JavaScript

#### From here's you can download NodeJS : <a>https://nodejs.org/en</a>
Verify the installation using this command into your terminal :
```cmd
node
```

#### npm (Node Package Manager) also included with the nodeJs that we can use to download and delete packages using the npm commands
```cmd
npm
```
## Hosting a local server from your machine using the framework 'express' : 
Download the express framework using the following command : 
```cmd
npm i express
```
Make a file with the extension of .js (index.js) and then paste the following code :
```cmd
const express = require('express');
const app = express();

// 3100 is your port for your live server
app.listen(3100, () => {
    console.log('Listenning on port 3100!');
});
```
Now, open your terminal and run this command to go live on your local server : 
```cmd
node index.js
```

#### Now, open your browser and search for : 
```search
localhost:3100
```

# Packages/modules installation processes handled by npm(Node Package Manager)
<hr>

## EXPRESS
Install express globally to access from anywhere, but this is not a good practise this is only for the learning purpose because of each projects required a specific version of their depencies. So install express locally while you're working on `real-projects`.

### Locally installation of express
```cmd
npm i express
```

### Globally installation of express
```cmd
npm i -g express
```

## NODEMON
 Install nodemon globally to allow nodemon access all the directories from the `root-node` to execute your assets also from the outside of your repository from where you were started your server.

## Globally installation of nodemon
```cmd
npm i -g nodemon
```

## nodemon instead of node
We can use `nodemon` to host the server locally and also we don't need to restart our server while we make any changes, nodemon will restart the server automatically when he detects any change in our assets.On the other hand, while using `node`, when we make any changes to our assets then we need to restart the server to see the change.

```cmd
# node index.js
## We can use nodemon for our ease in 
## development(or making changes) only instead of node
nodemon index.js 
```