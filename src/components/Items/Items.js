import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions/index';
import { setTimeout } from 'timers';

class Items extends Component {

    handleConsumeItem(name, index) {
        switch(name) {
            case 'Health':
                // Check if health potion exists
                if (this.props.playerItems[index][name] > 0) {
                    // If pokemon already has full health
                    if (this.props.playerPokemon[this.props.activePlayerPokemon].maxHealth === this.props.playerPokemon[this.props.activePlayerPokemon].currentHealth) {
                        return;
                    } else {
                        // Decrease item inventory
                        this.props.consumeItem(name, index);
                        // Discontinue players turn after using item
                        this.props.updateActiveStatus(false);
                        // Close bag menu
                        this.props.closeBag();
                        // Increase pokemon health by 20 points
                        this.props.increaseHealth();
                        // Display message
                        let message = `PLAYER used ${name.toUpperCase()}`;
                        this.props.updatePromptMessage(message);
                        setTimeout(() => {
                            this.props.fight();
                        }, 3000);
                    };
                };
                break;
            case 'PokeBall':
                // Limit pokemon can have to 6 or in gym battle
                if (this.props.gymBattle) {
                    let message = `Unable to use PokeBall in Gym Battle!`;
                    this.props.updatePromptMessage(message);
                    setTimeout(() => {
                        let name = this.props.playerPokemon[this.props.activePlayerPokemon].name;
                        let message = `What will ${name.toUpperCase()} do!`;
                        this.props.updatePromptMessage(message);
                    }, 1500)
                    return;
                };
                // Check if pokeball exists
                if (this.props.playerItems[index][name] > 0) {
                    // Checks to see if not gym battle
                    if (!this.props.gymBattle) {
                        // Discontinue players turn after using item
                        this.props.updateActiveStatus(false);
                        // Close bag menu
                        this.props.closeBag();
                        // Decrease item inventory
                        this.props.consumeItem(name, index);
                        // https://bulbapedia.bulbagarden.net/wiki/Catch_rate
                        // Calculate catch rate
                        // M is between 0 and 255
                        let M = Math.floor(Math.random() * 256);
                        // f = (HPmax * 255 * 4) / (HPcurrent * ball)
                        let f = Math.floor((this.props.oppPokemon[this.props.activeOppPokemon].maxHealth * 255 * 4) / (this.props.oppPokemon[this.props.activeOppPokemon].currentHealth * 8)); 
                        // if f is greater than M, pokemon is caught
                        if (f > M) {
                            // Add pokemon to player inventory
                            this.props.addPlayerPokemon(this.props.oppPokemon[this.props.activeOppPokemon])
                            // Display successful capture messsage
                            let message = `Gotcha! ${this.props.oppPokemon[this.props.activeOppPokemon].name.toUpperCase()} was caught!`;
                            this.props.updatePromptMessage(message);
                            this.props.updateActiveStatus(true);
                            // return to town
                            setTimeout(() => {
                                this.props.history.replace('/town');
                            }, 3000);
                        } else {
                            // Unsuccessful capture of pokemon
                            // Display message
                            let message = `${this.props.oppPokemon[this.props.activeOppPokemon].name.toUpperCase()} escaped from the Pokeball!`;
                            this.props.updatePromptMessage(message);
                            // Opponent's turn to attack
                            setTimeout(() => {
                                this.props.fight();
                            }, 3000);
                        };
                    };
                };
                break;
            default: 
                return;
        }
    }
    
    items () {
        return this.props.playerItems.map((item, index) => {
            return Object.keys(item).map((key) => {
                return (
                    <div className="row" key={index}>
                        <button value={key} index={index} onClick={() => this.handleConsumeItem(key, index)}>{key} X {item[key]}</button>
                    </div>
                )
            });
        })
    }

    render() {
        return (
            <div className="actionMenuInner">
                {this.items()}
                <div className="row">
                    <button onClick={() => this.props.closeBag()}>Close Bag</button>
                </div>
            </div>
        )

    };
};

const mapStateToProps = state => {
    return {
        playerItems: state.player.items,
        playerPokemon: state.player.pokemon,
        activePlayerPokemon: state.player.activePokemon,
        oppPokemon: state.opponent.pokemon,
        activeOppPokemon: state.opponent.activePokemon,
        gymBattle: state.status.gymBattle
    };
};

const mapStateToDispatch = dispatch => {
    return {
        consumeItem: (itemName, itemIndex) => dispatch(actions.consumeItem(itemName, itemIndex)),
        increaseHealth: () => dispatch(actions.increaseHealth()),
        updateActiveStatus: (status) => dispatch(actions.updateActiveStatus(status)),
        updatePromptMessage: (msg) => dispatch(actions.updatePromptMessage(msg)),
        addPlayerPokemon: (pokemon) => dispatch(actions.addPlayerPokemon(pokemon)),
    };
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Items));