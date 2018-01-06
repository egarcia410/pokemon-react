const knex = require('../db/knex');

module.exports = {
    // Retrieve specific pokemon by name
    getPokemonByName(req, res) {
        knex('pokemons').where('name', req.params.name)
            .then(result => {
                console.log(result)
                return res.send(result);
            })
            .catch(error => {
                console.log(error)
            })
    },
};