import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './ActionMenu.css';
import _ from 'lodash';

class ActionMenu extends Component {

    messageObj(pokemon) {
        return {
            pokemon: pokemon.name.toUpperCase(),
            attack: _.sample(pokemon.abilities).toUpperCase()
        };
    };

    attack(attacked, attacker) {
        // Displays attack message
        this.props.updateAttackPrompt(this.messageObj(attacker));
        if (attacked === this.props.user) {
            this.props.reduceUserHealth(attacker.attack);
        } else {
            this.props.reduceOppHealth(attacker.attack);
        }
    };

    fight() {
        // Opponent attacks User
        setTimeout(() => {
            this.attack(this.props.user, this.props.opp);
        }, 2000);
        // Reset to initial user prompt, active turn set to true
        setTimeout(() => {
            this.props.initialPrompt(this.props.user.name);
            this.props.updateActiveStatus(true);
        }, 4000);
    }

    run() {
        let randomNum = Math.floor(Math.random() * 101);
        // Escaped Successful
        if (randomNum < 100) {
            this.props.escapeBattle(true);
            this.props.history.push('/');
        } else { // Escaped Failed
            this.props.escapeBattle(false);
            this.fight();
        };
    };

    performAction = (event) => {
        event.preventDefault();
        this.props.updateActiveStatus(false)
        switch (event.target.name) {
            case 'fight':
                this.attack(this.props.opp, this.props.user)
                this.fight();
                break;
            case 'bag':
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

    render() {
        return (
            <div className="col-12 col-md-4 actionBox">
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
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        opp: state.opponent,
        status: state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        reduceOppHealth: (attackDamage) => dispatch(actions.reduceOppHealth(attackDamage)),
        reduceUserHealth: (attackDamage) => dispatch(actions.reduceUserHealth(attackDamage)),
        updateAttackPrompt: (obj) => dispatch(actions.updateAttackPrompt(obj)),
        updateActiveStatus: (status) => dispatch(actions.updateActiveStatus(status)),
        initialPrompt: (name) => dispatch(actions.initialPrompt(name)),
        escapeBattle: (status) => dispatch(actions.escapeBattle(status)),
    };                               
};


export default connect(mapStateToProps, mapDispatchToProps)(ActionMenu);