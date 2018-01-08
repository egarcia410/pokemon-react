import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    id: 1,
    name: 'Bulbasaur',
    type: ['grass', 'posion'],
    fullHealth: 100,
    abilities: ['tackle', 'vine whip'],
    currentHealth: 100,
    attack: 49,
    catchRate: 5.9,
    level: 1,
    // image: '../../images/1.png'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REDUCE_PLAYER_HEALTH:
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