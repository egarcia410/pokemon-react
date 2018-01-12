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
    console.log('EVOLVED ACTION')
    return {
        type: actionTypes.POKEMON_EVOLVED,
        responses: responses
    };
};