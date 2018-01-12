import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions/index';

class PokemonInventory extends Component {

    renderPokemonInventory() {
        this.props.pokemon.forEach(pokemon => {
            return (
                <div className="col-6" key={pokemon.id}>
                    <img className="pokemon" src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name.toLowerCase()}.png`} alt={pokemon.name} />
                    <h2 className={this.props.class}>{pokemon.name.toUpperCase()}</h2>
                </div>
            )
        });
    }


    render() {
        return (
            <div className="container">
                <h1>POKEMON INVENTORY</h1>
                {this.renderPokemonInventory}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        pokemon: state.player.pokemon
    };
};

export default connect(mapStateToProps)(PokemonInventory);