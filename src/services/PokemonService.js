import Api from './Api';

export default {
    getPokemonByName(name) {
        return Api().get('get-pokemon-by-name/' + name);
    },
    getPokemonByRarity(rarity) {
        return Api().get('get-pokemon-by-rarity/' + rarity);
    },    
    getPokemon(id) {
        return Api().get('get-pokemon/' + id);
    },
};