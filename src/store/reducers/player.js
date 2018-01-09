import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
import _ from 'lodash';

const initialState = {
    pokemon: [],
    items: [{'Health Potion': 1}, {'PokeBall': 1}],
    badges: [],
    money: 20,
    activePokemon: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYER_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.pokemon],
            };
        case actionTypes.REDUCE_PLAYER_HEALTH:
            let pokemon = _.cloneDeep(state.pokemon);
            let health = pokemon[state.activePokemon].currentHealth;
            pokemon[state.activePokemon].currentHealth = health - action.attackDamage;
            return {
                ...state,
                pokemon
            }
        default: 
            return state
    }
};

export default reducer;