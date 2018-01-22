import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Items from '../Items/Items';

import './ActionMenu.css';
import PokemonService from '../../services/PokemonService';
import { setTimeout } from 'timers';


class ActionMenu extends Component {

    state = {
        isBagOpen: false,
    };

    performAction = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case 'fight':
                this.props.updateActiveStatus(false)
                this.attack(this.props.oppPokemon[this.props.activeOppPokemon], this.props.playerPokemon[this.props.activePlayerPokemon])
                // Check if opponent pokemon is dead
                setTimeout(() => {
                    if (this.props.oppPokemon[this.props.activeOppPokemon].currentHealth === 0) {
                        // Checks if there are multiple opponent pokemon
                        if (this.props.oppPokemon.length > 1) {
                            // Display message announcing opponent pokemon has fainted
                            let message = `${this.props.oppPokemon[this.props.activeOppPokemon].name.toUpperCase()} has fainted!`
                            this.props.updatePromptMessage(message);
                            // Replaces dead pokemon with other pokemon
                            this.props.switchOppPokemon();
                            // Display message announcing new opponent pokemon entering fight
                            setTimeout(() => {
                                let message = `${this.props.oppPokemon[this.props.activeOppPokemon].name.toUpperCase()} has entered the fight!`
                                this.props.updatePromptMessage(message);
                                this.props.updateActiveStatus(true);  
                            }, 3000);
                        } else {
                            // All opponent pokemon are dead!
                            let message = `${this.props.oppPokemon[0].name.toUpperCase()} has fainted!`
                            this.props.updatePromptMessage(message);
                            setTimeout(() => {
                                let message = `You Won!`
                                this.props.updatePromptMessage(message);
                            }, 3000);
                            // Player pokemon gain experience
                            this.props.gainExperience();
                            // Display message of pokemon gaining experience
                            setTimeout(() => {
                                let message = `Your Pokemon have gained experience!`
                                this.props.updatePromptMessage(message);
                            }, 6000);
                            // Check if pokemon evolved
                            var promises = [];
                            for (var i=0; i < this.props.playerPokemon.length; i++){
                                let pokemon = this.props.playerPokemon[i];
                                var p = ''
                                if (pokemon.evolves) {
                                    p = PokemonService.getPokemonById(pokemon.evolves);
                                }
                                promises.push(p);
                            }
                            Promise.all(promises)
                                .then((responses) => {
                                    this.props.pokemonEvolved(responses);
                                    setTimeout(() => {
                                        this.props.revivePokemon();
                                        this.props.updateActiveStatus(true);  
                                        this.props.history.replace('/town');
                                    }, 9000);
                                });
                        };
                    } else {
                        // Opponent pokemon is not dead
                        this.fight();
                    }
                    
                }, 2000);
                break;
            case 'bag':
                this.toggleBagInventory();
                break;
            case 'pokemon':
                break;
            case 'run':
                this.props.updateActiveStatus(false)
                this.run();
                break;
            default:
                console.log('Something went wrong!')
        }
    }

    fight() {
        // Opponent attacks User
        setTimeout(() => {
            this.attack(this.props.playerPokemon[this.props.activePlayerPokemon], this.props.oppPokemon[this.props.activeOppPokemon])
        }, 2000);
        setTimeout(() =>{
            // Check your pokemon died
            if (this.props.playerPokemon[this.props.activePlayerPokemon].currentHealth === 0) {
                let name = this.props.playerPokemon[this.props.activePlayerPokemon].name;
                let message = `${name.toUpperCase()} Fainted!`;
                this.props.updatePromptMessage(message);
                // Checks if there are more pokemon in player inventory
                if (this.props.activePlayerPokemon < this.props.playerPokemon.length - 1) {
                    // Changes player pokemon
                    this.props.updateActivePokemon();
                    setTimeout(() => {
                        let name = this.props.playerPokemon[this.props.activePlayerPokemon].name;
                        let message = `Go ${name.toUpperCase()}!`;
                        this.props.updatePromptMessage(message);
                    }, 2000)
                } else {
                    // Revive pokemon and return to town
                    this.props.revivePokemon();
                    setTimeout(() => {
                        this.props.updateActiveStatus(true);
                        this.props.history.replace('/town');
                    }, 2000);
                };
            };
        }, 3000)
        // Reset player prompt, active turn set to true
        setTimeout(() => {
            let name = this.props.playerPokemon[this.props.activePlayerPokemon].name;
            let message = `What will ${name.toUpperCase()} do!`;
            this.props.updatePromptMessage(message);
            this.props.updateActiveStatus(true);
        }, 9000);
    }

    attack(attacked, attacker) {
        // Displays attack message
        let message = `${attacker.name.toUpperCase()} used ${attacker.attackName.toUpperCase()}`;
        this.props.updatePromptMessage(message);
        // Reduces health of attacked pokemon
        if (attacked === this.props.playerPokemon[this.props.activePlayerPokemon]) {
            this.props.reducePlayerHealth(attacker.attackDamage);
        } else {
            this.props.reduceOppHealth(attacker.attackDamage);
        }
    };

    run() {
        let randomNum = Math.floor(Math.random() * 101);
        // Escaped Successful
        if (randomNum < 50) {
            this.props.escapeBattle(true);
            setTimeout(() => {
                this.props.history.push('/town');
            }, 1000)
        } else { 
            // Escaped Failed
            this.props.escapeBattle(false);
            this.fight();
        };
    };

    toggleBagInventory() {
        this.setState({
            isBagOpen: !this.state.isBagOpen
        });
    }

    render() {
        // Checking bag inventory for items
        if (this.state.isBagOpen) {
            return (
                <div className="col-12 col-md-4 actionMenuOuter">
                    <Items fight={() => this.fight()} closeBag={() => this.toggleBagInventory()}/>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-md-4 actionMenuOuter">
                    <div className="actionMenuInner">
                        <div className="row">
                            <div className="col-6">
                                {this.props.status.activeTurn 
                                    ? <button name="fight" onClick={(e) => this.performAction(e)}>FIGHT</button>
                                    : <button disabled >FIGHT</button>
                                }
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5">
                                {this.props.status.activeTurn
                                    ? <button name="bag" onClick={(e) => this.performAction(e)}>BAG</button>
                                    : <button disabled >BAG</button>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                {this.props.status.activeTurn
                                    ? <button name="pokemon" onClick={(e) => this.performAction(e)}>POKeMON</button>
                                    : <button disabled >POKeMON</button>
                                }
                            </div>
                            <div className="col-1"></div>
                            <div className="col-5">
                                {this.props.status.activeTurn
                                    ? <button name="run" onClick={(e) => this.performAction(e)}>RUN</button>
                                    : <button disabled >RUN</button>
                                }
                            </div>
                        </div>
    
                    </div>
                </div>
            )

        }
    }
}

const mapStateToProps = state => {
    return {
        activePlayerPokemon: state.player.activePokemon,
        playerPokemon: state.player.pokemon,
        player: state.player,
        activeOppPokemon: state.opponent.activePokemon,
        oppPokemon: state.opponent.pokemon,
        opp: state.opponent,
        status: state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reduceOppHealth: (attackDamage) => dispatch(actions.reduceOppHealth(attackDamage)),
        reducePlayerHealth: (attackDamage) => dispatch(actions.reducePlayerHealth(attackDamage)),
        updateActiveStatus: (status) => dispatch(actions.updateActiveStatus(status)),
        updatePromptMessage: (msg) => dispatch(actions.updatePromptMessage(msg)),
        escapeBattle: (status) => dispatch(actions.escapeBattle(status)),
        switchOppPokemon: () => dispatch(actions.switchOppPokemon()),
        gainExperience: () => dispatch(actions.gainExperience()),
        pokemonEvolved: (responses) => dispatch(actions.pokemonEvolved(responses)),
        updateActivePokemon: () => dispatch(actions.updateActivePokemon()),
        revivePokemon: () => dispatch(actions.revivePokemon()),
    };                               
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionMenu);