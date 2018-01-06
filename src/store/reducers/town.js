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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLAYER_POSITION:
            return {
                ...state,
                rowPos: action.row,
                colPos: action.col
            };
        default:
            return state
    }
};

export default reducer;