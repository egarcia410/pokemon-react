import Api from './Api';

export default {
    getPokemonByName(name) {
        return Api().get('get-pokemon-by-name/' + name);
    },
    getPokemonByRarityAndLand(rarity) {
        return Api().get('get-pokemon-by-rarity-land/' + rarity);
    },
    getPokemonByRarityAndWater(rarity) {
        return Api().get('get-pokemon-by-rarity-water/' + rarity);
    },      
    getPokemonById(id) {
        return Api().get('get-pokemon-by-id/' + id);
    },
};