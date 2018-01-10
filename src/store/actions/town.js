import * as actionTypes from './actionTypes';

export const updatePlayerPosition = (rowPos, colPos) => {
    console.log('UPDATE PLAYER POSTION')
    return {
        type: actionTypes.UPDATE_PLAYER_POSITION,
        rowPos: rowPos,
        colPos: colPos
    };
};
