const express = require('express');
const PokemonController = require('./controllers/PokemonController');
const serveStatic = require('serve-static');

module.exports = (app) => {
    app.get('/get-pokemon-by-name/:name', PokemonController.getPokemonByName);
    app.get('/get-pokemon-by-rarity-land/:rarity', PokemonController.getPokemonByRarityAndLand);
    app.get('/get-pokemon-by-rarity-water/:rarity', PokemonController.getPokemonByRarityAndWater);
    app.get('/get-pokemon-by-id/:id', PokemonController.getPokemonById);
    
    app.use(serveStatic(__dirname + '/../build'));
    
    app.get('/*', function (req, res) {
        res.sendfile(__dirname + '/../build/index.html');
    });
};