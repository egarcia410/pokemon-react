import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
import _ from 'lodash';

const initialState = {
    pokemon: [],
    items: [{'Health': 1}, {'PokeBall': 1}],
    badges: [],
    money: 20,
    activePokemon: 0
};

const reducer = (state = initialState, action) => {
    var pokemon = _.cloneDeep(state.pokemon);
    switch (action.type) {
        case actionTypes.ADD_PLAYER_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.pokemon],
            };
        case actionTypes.REDUCE_PLAYER_HEALTH:
            let health = pokemon[state.activePokemon].currentHealth;
            pokemon[state.activePokemon].currentHealth = health - action.attackDamage;
            return {
                ...state,
                pokemon
            }
        case actionTypes.CONSUME_ITEM:
            let items = _.cloneDeep(state.items);
            let itemCount = items[action.itemIndex][action.itemName];
            items[action.itemIndex][action.itemName] = itemCount - 1;
            return {
                ...state,
                items
            }
        case actionTypes.INCREASE_HEALTH:
            console.log('health reducer', health)
            if (health > pokemon[state.activePokemon].maxHealth) {
                pokemon[state.activePokemon].currentHealth = pokemon[state.activePokemon].maxHealth;
            } else {
                pokemon[state.activePokemon].currentHealth += 20;
            }
            return {
                ...state,
                pokemon
            }
        default: 
            return state
    }
};

export default reducer;