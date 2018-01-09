import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
import _ from 'lodash';

const initialState = {
    pokemon: [],
    activePokemon: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REDUCE_OPP_HEALTH:
            let pokemon = _.cloneDeep(state.pokemon);
            console.log(pokemon, 'POKEMON REDUCER OPP')
            let health = pokemon[state.activePokemon].currentHealth;
            console.log(health, 'HEALTH')
            pokemon[state.activePokemon].currentHealth = health - action.attackDamage;
            console.log(pokemon, "AFTERWARDS")
            return {
                ...state,
                pokemon
            }
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