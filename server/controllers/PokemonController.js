const knex = require('../db/knex');

module.exports = {
    // Retrieve specific pokemon by name
    getPokemonByName(req, res) {
        knex('pokemons').where('name', req.params.name)
            .then(result => {
                return res.send(result);
            })
            .catch(error => {
                console.log(error)
            })
    },
    // Retrieve specific pokemon by rarity and land based
    getPokemonByRarityAndLand(req, res) {
        knex('pokemons')
            .where('rarity', req.params.rarity)
            .andWhere('type', '!=', 'Water')
            .then(result => {
                return res.send(result);
            })
            .catch(error => {
                console.log(error)
            })
    },
    // Retrieve specific pokemon by rarity and water based
    getPokemonByRarityAndWater(req, res) {
        knex('pokemons')
            .where('rarity', req.params.rarity)
            .andWhere('type', 'Water')
            .then(result => {
                return res.send(result);
            })
            .catch(error => {
                console.log(error)
            })
    },
    // Retrieve specific pokemon by id
    getPokemonById(req, res) {
        knex('pokemons').where('id', req.params.id)
            .then(result => {
                return res.send(result);
            })
            .catch(error => {
                console.log(error)
            })
    },
};