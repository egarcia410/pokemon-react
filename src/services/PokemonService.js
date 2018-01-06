import Api from './Api';

export default {
    getPokemonByName(name) {
        return Api().get('get-pokemon-by-name/' + name);
    },
    getPokemon(id) {
        return Api().get('get-pokemon/' + id);
    },
};