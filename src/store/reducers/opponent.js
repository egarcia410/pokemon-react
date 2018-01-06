import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    id: 4,
    name: 'Charmander',
    type: ['fire'],
    fullHealth: 100,
    currentHealth: 100,
    attack: 52,
    abilities: ['ember', 'scratch'],
    currentAbility: '',
    catchRate: 5.9,
    level: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REDUCE_OPP_HEALTH:
            let health = state.currentHealth;
            let reducedHealth = health - action.attackDamage;
            return updateObject(state, {
                currentHealth: reducedHealth
            });
        default:
            return state;
    }
}

export default reducer;