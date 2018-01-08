import React, { Component } from 'react';
import { connect } from 'react-redux';

import './StatusMenu.css';

class StatusMenu extends Component {

    convertHealth = (pokemon) => {
        let health = pokemon.currentHealth;
        if (health <= 0) {
            return 0;
        }
        let percentageDecrease = (health / pokemon.maxHealth) * 100;
        return percentageDecrease;
    }

    render() {
        if (this.props.isUser) {
            return (
                <div className="statusBar col-12 col-md-4">
                    <div className="topStatusBar">
                        <div className="nameType">
                            <h1 className="name">{this.props.playerPokemon[this.props.activePlayerPokemon].name} <span className="type">{this.props.playerPokemon[this.props.activePlayerPokemon].type}</span> </h1>
                        </div>
                        <h2 className="level">Lv {this.props.playerPokemon[this.props.activePlayerPokemon].level}</h2>
                    </div>
                    <div className="bottomStatusBar">
                        <div style={{ width: this.convertHealth(this.props.playerPokemon[this.props.activePlayerPokemon]) + '%' }} className="healthBar">HP {this.props.playerPokemon[this.props.activePlayerPokemon].currentHealth}</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="statusBar col-12 col-md-4">
                    <div className="topStatusBar">
                        <div className="nameType">
                            <h1 className="name">{this.props.oppPokemon[this.props.activeOppPokemon].name} <span className="type">{this.props.oppPokemon[this.props.activeOppPokemon].type}</span> </h1>
                        </div>
                        <h2 className="level">Lv {this.props.oppPokemon[this.props.activeOppPokemon].level}</h2>
                    </div>
                    <div className="bottomStatusBar">
                        <div style={{ width: this.convertHealth(this.props.oppPokemon[this.props.activeOppPokemon]) + '%' }} className="healthBar">HP {this.props.oppPokemon[this.props.activeOppPokemon].currentHealth}</div>
                    </div>
                </div>
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        activePlayerPokemon: state.player.activePokemon,
        activeOppPokemon: state.opponent.activePokemon,
        playerPokemon: state.player.pokemon,
        oppPokemon: state.opponent.pokemon
    };
};

export default connect(mapStateToProps)(StatusMenu);