const express = require('express');
const path = require('path');
let pokemon = require('./pokemon.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const {type} = require('os')
const app = express();
app.listen(3200, () => {
    console.log("You're on the 3200 port: ");
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
    res.render('CRUD/home');
});
app.get('/pokemons', (req, res) => {
    res.json(pokemon);
});
app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    const poke = pokemon.find(p => p.id === parseInt(id));
    res.render('CRUD/pokemon', { poke });
});
