import * as actionTypes from './actionTypes';

export const addPlayerPokemon = (pokemon) => {
    return {
        type: actionTypes.ADD_PLAYER_POKEMON,
        pokemon: pokemon
    };
};