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

export const consumeItem = (itemName, itemIndex) => {
    return {
        type: actionTypes.CONSUME_ITEM,
        itemName: itemName,
        itemIndex: itemIndex
    };
};

export const increaseHealth = () => {
    return {
        type: actionTypes.INCREASE_HEALTH
    };
};

export const gainExperience = () => {
    return {
        type: actionTypes.GAIN_EXPERIENCE
    };
};

export const pokemonEvolved = (responses) => {
    return {
        type: actionTypes.POKEMON_EVOLVED,
        responses: responses
    };
};

export const updateActivePokemon = () => {
    return {
        type: actionTypes.UPDATE_ACTIVE_POKEMON,
    };
};

export const revivePokemon = () => {
    return {
        type: actionTypes.REVIVE_POKEMON,
    };
};

export const resetActivePokemon = () => {
    return {
        type: actionTypes.RESET_ACTIVE_POKEMON,
    };
};

export const buyItem = (item, price) => {
    return {
        type: actionTypes.BUY_ITEM,
        item: item,
        price: price
    };
};

export const removePokemon = (index) => {
    console.log('Inside actions', index);
    return {
        type: actionTypes.REMOVE_POKEMON,
        index: index
    };
};