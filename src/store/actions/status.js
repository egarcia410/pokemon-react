import * as actionTypes from './actionTypes';

export const initialPrompt = (name) => {
    return {
        type: actionTypes.INITIAL_PROMPT,
        name: name
    };
};

export const updateAttackPrompt = (obj) => {
    return {
        type: actionTypes.UPDATE_ATTACK_PROMPT,
        obj: obj
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
