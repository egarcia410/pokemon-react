export const REDUCE_HEALTH = 'REDUCE_HEALTH';

export const reduceHealth = (user, opp) => {
    return {
        type: REDUCE_HEALTH,
        user: user,
        opp: opp
    };
};