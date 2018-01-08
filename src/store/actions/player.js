import * as actionTypes from './actionTypes';

export const addPlayerPokemon = (pokemon) => {
    return {
        type: actionTypes.ADD_PLAYER_POKEMON,
        pokemon: pokemon
    };
};

export const reducePlayerHealth = (attackDamage) => {
    return {
        type: actionTypes.REDUCE_PLAYER_HEALTH,
        attackDamage: attackDamage
    };
};