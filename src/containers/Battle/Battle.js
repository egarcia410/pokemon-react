import React, { Component } from 'react';
import StatusMenu from '../../components/StatusMenu/StatusMenu';
import Pokemon from '../../components/Pokemon/Pokemon';
import Prompt from '../../components/Prompt/Prompt';
import ActionMenu from '../../components/ActionMenu/ActionMenu';

import './Battle.css';

class Battle extends Component {

    state = {
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

    convertHealth = (user, opponent) => {
        let health = user.currentHealth;
        if (health < 0) {
            return 0;
        }
        let percentageDecrease = (health / user.fullHealth) * 100;
        return percentageDecrease;
    }

    convertImage = (name) => {
        return `https://img.pokemondb.net/sprites/x-y/normal/${name.toLowerCase()}.png`
    }

    reduceHealth = (user, opp) => {
        let health = opp.currentHealth;
        let reducedHealth = health - user.attack;
        // User attacks on their turn
        if (this.state.activeTurn) {
            let opponent = { ...opp };
            opponent.currentHealth = reducedHealth;
            this.setState({ opponent })
        // Opponent attacks on their turn
        } else {
            let user = { ...opp };
            user.currentHealth = reducedHealth;
            this.setState({ user }) 
        }
    }

    performAction = (event) => {
        event.preventDefault();
        switch (event.target.name) {
            case 'fight':
                // User attacks Opponent
                this.reduceHealth(this.state.user, this.state.opponent);
                setTimeout(() => {
                    // Completes user's turn
                    this.setState({activeTurn: false});
                    // Opponent attacks User
                    this.reduceHealth(this.state.opponent, this.state.user);
                }, 1000);
                setTimeout(() => {
                    // Completes Opponent's turn
                    this.setState({ activeTurn: true });
                }, 4000)
                break;
            case 'bag':
                break;
            case 'pokemon':
                break;
            case 'run':
                break;
            default:
                console.log('Something went wrong!')
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="battleArena">
                    {/* Opponent */}
                    <div className="row">
                        <StatusMenu user={this.state.opponent} 
                                    opponent={this.state.user} 
                                    health={this.convertHealth}/>
                        <Pokemon user={this.state.opponent} 
                                image={this.convertImage}/>
                    </div>
                    {/* User */}
                    <div className="row" style={{alignItems: 'flex-end'}}>
                        <Pokemon user={this.state.user} 
                                image={this.convertImage}/>
                        <StatusMenu user={this.state.user} 
                                    opponent={this.state.opponent} 
                                    health={this.convertHealth}/>
                    </div>
                </div>
                {/* Prompt & Actions */}
                <div className="row">
                    <Prompt user={this.state.user}
                            opponent={this.state.opponent}
                            active={this.state.activeTurn}/>
                    <ActionMenu action={this.performAction} 
                                active={this.state.activeTurn}/>
                </div>
            </div>
        )
    }
}

export default Battle;