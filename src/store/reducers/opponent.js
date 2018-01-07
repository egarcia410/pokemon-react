import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    pokemon: [],
    activePokemon: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.REDUCE_OPP_HEALTH:
        //     let health = state.currentHealth;
        //     let reducedHealth = health - action.attackDamage;
        //     return updateObject(state, {
        //         currentHealth: reducedHealth
        //     });
        case actionTypes.ADD_OPP_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.pokemon],
            };
        default:
            return state;
    }
}

export default reducer;