import * as actionTypes from './actionTypes';

export const addOppPokemon = (pokemon) => {
    return {
        type: actionTypes.ADD_OPP_POKEMON,
        pokemon: pokemon
    };
};

export const reduceOppHealth = (attackDamage) => {
    return {
        type: actionTypes.REDUCE_OPP_HEALTH,
        attackDamage: attackDamage
    };
};