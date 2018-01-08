import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    activeTurn: true,
    promptMessage: '',
    gymBattle: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PROMPT_MESSAGE:
            return updateObject(state, {
                promptMessage: action.msg
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