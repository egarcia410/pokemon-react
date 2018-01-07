import * as actionTypes from '../actions/actionTypes';

// BB = Building Bottom
// BT = Building Top
// GL = Gym Leaders(1,2,3,4,5,6,7,8)
// ST = Store
// PT = Path
// WT = Water
// TG = Training Grounds
// TR = Trees(border)

const initialState = {
    map: [
        ['TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR'],
        ['TR', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'TR'],
        ['TR', 'PT', 'BT', 'BT', 'BT', 'BT', 'PT', 'PT', 'PT', 'BT', 'BT', 'BT', 'BT', 'PT', 'TR'],
        ['TR', 'PT', 'BT', 'BT', 'BT', 'BT', 'PT', 'PT', 'PT', 'BT', 'BT', 'BT', 'BT', 'PT', 'TR'],
        ['TR', 'PT', 'BB', 'BB', 'BB', 'BB', 'PT', 'PT', 'PT', 'BB', 'BB', 'BB', 'BB', 'PT', 'TR'],
        ['TR', 'PT', 'BB', 'ST', 'BB', 'BB', 'PT', 'PT', 'PT', 'BB', 'GL', 'BB', 'BB', 'PT', 'TR'],
        ['TR', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'TR'],
        ['TR', 'PT', 'TG', 'TG', 'TG', 'TG', 'PT', 'PT', 'PT', 'WT', 'WT', 'WT', 'WT', 'PT', 'TR'],
        ['TR', 'PT', 'TG', 'TG', 'TG', 'TG', 'PT', 'PT', 'PT', 'WT', 'WT', 'WT', 'WT', 'PT', 'TR'],
        ['TR', 'PT', 'TG', 'TG', 'TG', 'TG', 'PT', 'PT', 'PT', 'WT', 'WT', 'WT', 'WT', 'PT', 'TR'],
        ['TR', 'PT', 'TG', 'TG', 'TG', 'TG', 'PT', 'PT', 'PT', 'WT', 'WT', 'WT', 'WT', 'PT', 'TR'],
        ['TR', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'PT', 'TR'],
        ['TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR', 'TR'],
    ],
    rowPos: 1,
    colPos: 1
};

function validPlayerPosition(state, rowPos, colPos) {
    let pos = state.map[rowPos][colPos] 
    if (pos === 'TR' || pos === 'BT' || pos === 'BB') {
        return false;
    }
    return true;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLAYER_POSITION:
            // Check if new player position is valid
            if (validPlayerPosition(state, action.rowPos, action.colPos)) {
                return {
                    ...state,
                    rowPos: action.rowPos,
                    colPos: action.colPos
                };
            }
            return {
                ...state
            }
        default:
            return state
    }
};

export default reducer;
