import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initialState = {
    pokemon: [],
    items: [],
    badges: [],
    // xPos: 1,
    // yPos: 1
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