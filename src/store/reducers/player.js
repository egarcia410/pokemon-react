import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
import _ from 'lodash';

const initialState = {
    pokemon: [],
    pokemonInventory: [],
    items: [{'Health': 10}, {'PokeBall': 10}],
    badges: [],
    money: 300,
    activePokemon: 0
};

const reducer = (state = initialState, action) => {
    var pokemon = _.cloneDeep(state.pokemon);
    var items = _.cloneDeep(state.items);
    var money = state.money;
    if (pokemon[state.activePokemon]) {
        var health = pokemon[state.activePokemon].currentHealth;
    }
    switch (action.type) {
        case actionTypes.ADD_PLAYER_POKEMON:
            return {
                ...state,
                pokemon: [...state.pokemon, action.pokemon],
            };
        case actionTypes.REDUCE_PLAYER_HEALTH:
            let reducedHealth = health - action.attackDamage;
            // Pokemon is dead
            if (reducedHealth <= 0) {
                pokemon[state.activePokemon].currentHealth = 0;
            } else {
                pokemon[state.activePokemon].currentHealth = reducedHealth;
            }
            return {
                ...state,
                pokemon
            }
        case actionTypes.CONSUME_ITEM:
            let itemCount = items[action.itemIndex][action.itemName];
            items[action.itemIndex][action.itemName] = itemCount - 1;
            return {
                ...state,
                items
            }
        case actionTypes.INCREASE_HEALTH:
            if ( (health + 20) > pokemon[state.activePokemon].maxHealth) {
                pokemon[state.activePokemon].currentHealth = pokemon[state.activePokemon].maxHealth;
            } else {
                pokemon[state.activePokemon].currentHealth += 20;
            }
            return {
                ...state,
                pokemon
            }
        case actionTypes.GAIN_EXPERIENCE:
            pokemon.forEach(p => {
                if (p.xp % 5 === 0) {
                    p.maxHealth += 5;
                    p.attackDamage += 2;
                    p.level += 1;
                    p.xp = 0;
                } else {
                    p.xp += 1;
                };
            });
            money = state.money + action.money;
            return {
                ...state,
                pokemon,
                money
            }
        case actionTypes.POKEMON_EVOLVED:
            pokemon.forEach((p, index) => {
                if (p.level % 1 === 0) {
                    if (action.responses[index]) {
                        p.id = action.responses[index].data[0].id;
                        p.name = action.responses[index].data[0].name;
                        p.attackName = action.responses[index].data[0].attackName;
                        if (p.evolves) {
                            p.evolves = action.responses[index].data[0].evolves;
                        }
                    }
                }
            });
            return {
                ...state,
                pokemon
            }
        case actionTypes.UPDATE_ACTIVE_POKEMON:
            let a = state.activePokemon + 1;
            return {
                ...state,
                activePokemon: a
            };
        case actionTypes.REVIVE_POKEMON:
            pokemon.forEach((p, index) => {
                if (p.currentHealth === 0) {
                    p.currentHealth = state.pokemon[index].maxHealth;
                }
            });
            return {
                ...state,
                pokemon
            }
        case actionTypes.RESET_ACTIVE_POKEMON:
            return {
                ...state,
                activePokemon: 0
            }
        case actionTypes.BUY_ITEM:
            let reducedMoney = state.money - action.price;
            money = reducedMoney;
            items.forEach((item, index) => {
                if (item[action.item] || item[action.item] === 0) {
                    item[action.item] += 1;
                };
            });
            return {
                ...state,
                items,
                money
            }
        case actionTypes.REMOVE_POKEMON:
            pokemon.splice(action.index, 1);
            return {
                ...state,
                pokemon
            }
        case actionTypes.UPDATE_PLAYER_BADGE:
            let badges = state.badges.push(action.badge);
            return {
                ...state,
                badges
            }
        default: 
            return state
    }
};

export default reducer;