const express = require('express');
const PokemonController = require('./controllers/PokemonController');
const serveStatic = require('serve-static');

module.exports = (app) => {
    app.get('/get-pokemon-by-name/:name', PokemonController.getPokemonByName);
    app.get('/get-pokemon-by-rarity/:rarity', PokemonController.getPokemonByRarity);
    app.get('/get-pokemon-by-id/:id', PokemonController.getPokemonById);
    
    app.use(serveStatic(__dirname + '/../build'));
    
    app.all('/*', function (req, res) {
        res.sendfile(__dirname + '/../build/index.html');
    })
};