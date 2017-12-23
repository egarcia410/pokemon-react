export const REDUCE_OPP_HEALTH = 'REDUCE_OPP_HEALTH';
export const REDUCE_USER_HEALTH = 'REDUCE_USER_HEALTH';

function reduceOppHealth(user, opp) {
    return {
        type: REDUCE_OPP_HEALTH,
        user: user,
        opp: opp
    };
}

function reduceUserHealth(user, opp) {
    return {
        type: REDUCE_USER_HEALTH,
        user: user,
        opp: opp
    };
}

export const reduceHealth = (user, opp) => {
    return dispatch => {
        dispatch(reduceOppHealth(user, opp))
        setTimeout(() => {
            dispatch(reduceUserHealth(user, opp))
        }, 2000)
    }
};