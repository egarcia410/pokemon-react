const express = require('express');
const PokemonController = require('./controllers/PokemonController');

module.exports = (app) => {
    app.get('/get-pokemon-by-name/:name', PokemonController.getPokemonByName);
};