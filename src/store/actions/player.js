import * as actionTypes from './actionTypes';

export const addPokemon = (pokemon) => {
    return {
        type: actionTypes.ADD_POKEMON,
        pokemon: pokemon
    };
};