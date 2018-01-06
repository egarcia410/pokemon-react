import * as actionTypes from './actionTypes';

export const updatePlayerPosition = (row, col) => {
    return {
        type: actionTypes.UPDATE_PLAYER_POSITION,
        row: row,
        col: col
    };
};