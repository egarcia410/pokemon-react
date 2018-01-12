import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import * as actions from '../../store/actions/index';
import { Button } from 'react-bootstrap';


class PokemonList extends Component {

    render() {
        let pokemonList = (
            this.props.playerPokemon.map(pokemon => {
                return (
                    <div className="col-6 pokeBox" key={pokemon.id}>
                        <img className="pokemon" src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name.toLowerCase()}.png`} alt={pokemon} />
                        <h2>{pokemon.toUpperCase()}</h2>
                        <Button bsStyle="danger">Remove Pokemon</Button>
                    </div>
                )
            })
        )
        return (
            <div>
                <Button bsStyle="success">Back to Town</Button>
                {pokemonList}
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        playerPokemon: state.player.pokemon
    };
};

export default connect(mapStateToProps)(PokemonList);