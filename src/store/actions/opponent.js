import * as actionTypes from './actionTypes';

export const reduceOppHealth = (attackDamage) => {
    return {
        type: actionTypes.REDUCE_OPP_HEALTH,
        attackDamage: attackDamage
    };
};
