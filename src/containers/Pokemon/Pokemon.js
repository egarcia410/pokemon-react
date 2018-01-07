import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Pokemon.css';

class Pokemon extends Component {

    convertImage = (name) => {
        return `https://img.pokemondb.net/sprites/x-y/normal/${name.toLowerCase()}.png`;
    }

    render() {
        if (this.props.isUser) {
            return (
                <div className="col-12 col-md-8 pokemonBox">
                    <img className="pokemon" src={this.convertImage(this.props.playerPokemon[this.props.activePlayerPokemon].name)} alt={this.props.playerPokemon[this.props.activePlayerPokemon].name}/>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-md-8 pokemonBox">
                    <img className="pokemon" src={this.convertImage(this.props.oppPokemon[this.props.activeOppPokemon].name)} alt={this.props.oppPokemon[this.props.activeOppPokemon].name}/>
                </div>     
            )    
        }
    }
}

const mapStateToProps = state => {
    return {
        activePlayerPokemon: state.player.activePokemon,
        activeOppPokemon: state.opponent.activePokemon,
        playerPokemon: state.player.pokemon,
        oppPokemon: state.opponent.pokemon
    };
}

export default connect(mapStateToProps)(Pokemon);