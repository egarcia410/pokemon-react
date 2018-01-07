import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initialState = {
    pokemon: [],
    items: [],
    badges: [],
    money: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.pokemon],
            };
        default: 
            return state
    }
};

export default reducer;