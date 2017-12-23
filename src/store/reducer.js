import * as actionTypes from './actions/actions';

const initialState = {
    user: {
        id: 1,
        name: 'Bulbasaur',
        type: ['grass', 'posion'],
        fullHealth: 100,
        currentHealth: 100,
        attack: 49,
        catchRate: 5.9,
        level: 1,
        // image: '../../images/1.png'
    },
    opponent: {
        id: 4,
        name: 'Charmander',
        type: ['fire'],
        fullHealth: 100,
        currentHealth: 100,
        attack: 52,
        abilities: ['ember', 'scratch'],
        currentAbility: '',
        catchRate: 5.9,
        level: 1,
        // image: '../../images/4.png'      
    },
    activeTurn: true    
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.REDUCE_OPP_HEALTH:
            let health = action.opp.currentHealth;
            let reducedHealth = health - action.user.attack;
            let opponent = { ...action.opp };
            opponent.currentHealth = reducedHealth;
            return {
                ...state,
                opponent: opponent,
                activeTurn: false
            };
        case actionTypes.REDUCE_USER_HEALTH:
            let h = action.user.currentHealth;
            let reducedH = h - action.opp.attack;
            let user = { ...action.user };
            user.currentHealth = reducedH;
            return {
                ...state,
                user: user,
                activeTurn: true
            };
        default:
            return state;
    }
}

export default reducer;