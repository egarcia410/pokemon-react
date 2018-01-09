import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './ActionMenu.css';


class ActionMenu extends Component {

    state = {
        isBagOpened: false,
    };

    performAction = (event) => {
        event.preventDefault();
        this.props.updateActiveStatus(false)
        switch (event.target.name) {
            case 'fight':
                this.attack(this.props.oppPokemon[this.props.activeOppPokemon], this.props.playerPokemon[this.props.activePlayerPokemon])
                this.fight();
                break;
            case 'bag':
                this.setState({
                    isBagOpened: true
                });
                break;
            case 'pokemon':
                break;
            case 'run':
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
        // Reset player prompt, active turn set to true
        setTimeout(() => {
            let name = this.props.playerPokemon[this.props.activePlayerPokemon].name;
            let message = `What will ${name.toUpperCase()} do!`;
            this.props.updatePromptMessage(message);
            this.props.updateActiveStatus(true);
        }, 4000);
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
            }, 2000)
        } else { 
            // Escaped Failed
            this.props.escapeBattle(false);
            this.fight();
        };
    };

    renderItemIventory() {

    }

    render() {
        if (this.state.isBagOpened) {
            return (
                <div className="col-12 col-md-4 actionMenuOuter">
                    <div className="actionMenuInner">
                        <div className="row">
                            {this.renderItemIventory()}
                        </div>
                    </div>
                </div>
            )
        }
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
    };                               
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionMenu);