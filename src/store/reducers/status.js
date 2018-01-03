import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    activeTurn: true,
    promptMessage: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIAL_PROMPT:
            return updateObject(state, {
                promptMessage: `What will ${action.name.toUpperCase()} do?`
            });
        case actionTypes.UPDATE_ATTACK_PROMPT:
            return updateObject(state, {
                promptMessage: `${action.obj.pokemon} used ${action.obj.attack}`
            });
        case actionTypes.UPDATE_ACTIVE_STATUS:
            return updateObject(state, { activeTurn: action.status });
        case actionTypes.ESCAPE_BATTLE:
            if (action.escapedStatus) {
                return updateObject(state, {
                    promptMessage: 'You escaped safely!'
                });
            }
            return updateObject(state, {
                activeTurn: false,
                promptMessage: "Can't Escape!"
            });
        default: return state;
    }
};

export default reducer;