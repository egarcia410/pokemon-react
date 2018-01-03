import * as actionTypes from './actionTypes';

export const reduceUserHealth = (attackDamage) => {
    return {
        type: actionTypes.REDUCE_USER_HEALTH,
        attackDamage: attackDamage
    };
};