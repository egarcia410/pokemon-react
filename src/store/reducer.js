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
    return state;
}

export default reducer;