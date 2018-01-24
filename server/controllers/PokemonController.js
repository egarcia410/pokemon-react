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
    // Retrieve specific pokemon by rarity
    getPokemonByRarity(req, res) {
        knex('pokemons').where('rarity', req.params.rarity)
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
                console.log(result)
                return res.send(result);
            })
            .catch(error => {
                console.log(error)
            })
    },
};