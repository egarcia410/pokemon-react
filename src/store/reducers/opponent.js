import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
import _ from 'lodash';

const initialState = {
    pokemon: [],
    activePokemon: 0
};

const reducer = (state = initialState, action) => {
    var pokemon = _.cloneDeep(state.pokemon);
    switch (action.type) {
        case actionTypes.REDUCE_OPP_HEALTH:
            let health = pokemon[state.activePokemon].currentHealth;
            let reducedHealth = health - action.attackDamage;
            // Pokemon is dead
            if (reducedHealth <= 0) {
                pokemon[state.activePokemon].currentHealth = 0;
            } else {
                pokemon[state.activePokemon].currentHealth = reducedHealth;
            }
            return {
                ...state,
                pokemon
            };
        case actionTypes.ADD_OPP_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.pokemon],
            };
        case actionTypes.RESET_OPPONENT:
            return {
                pokemon: [],
                activePokemon: 0
            };
        case actionTypes.SWITCH_OPP_POKEMON:
            // Removes first pokemon obj in pokemon array
            pokemon.shift();
            return {
                ...state,
                pokemon
            }
        default:
            return state;
    }
}

export default reducer;