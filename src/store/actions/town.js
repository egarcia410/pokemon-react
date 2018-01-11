import * as actionTypes from './actionTypes';

export const updatePlayerPosition = (rowPos, colPos) => {
    return {
        type: actionTypes.UPDATE_PLAYER_POSITION,
        rowPos: rowPos,
        colPos: colPos
    };
};
