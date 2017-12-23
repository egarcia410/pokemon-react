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
        case actionTypes.REDUCE_HEALTH:
            let health1 = action.user.currentHealth;
            let health2 = action.opp.currentHealth;
        
            let reducedHealth1 = health1 - action.opp.attack;
            let reducedHealth2 = health2 - action.user.attack;
        
            let opponent = { ...action.opp };
            opponent.currentHealth = reducedHealth1;
            let user = { ...action.user };
            user.currentHealth = reducedHealth2;

            return {
                user: user,
                opponent: opponent,
                activeTurn: false
            };
        
        default:
            return state;

    }
}

export default reducer;