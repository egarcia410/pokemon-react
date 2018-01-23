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

export const resetOpponent = () => {
    return {
        type: actionTypes.RESET_OPPONENT
    };
};

export const switchOppPokemon = () => {
    return {
        type: actionTypes.SWITCH_OPP_POKEMON
    };
};

export const updateActiveGymLeader = () => {
    return {
        type: actionTypes.UPDATE_ACTIVE_GYM_LEADER
    };
};