import * as actionTypes from './actionTypes';

export const updatePromptMessage = (msg) => {
    return {
        type: actionTypes.UPDATE_PROMPT_MESSAGE,
        msg: msg
    };
};

export const updateActiveStatus = (status) => {
    return {
        type: actionTypes.UPDATE_ACTIVE_STATUS,
        status: status
    };
};

export const escapeBattle = (status) => {
    return {
        type: actionTypes.ESCAPE_BATTLE,
        escapedStatus: status
    };
};
