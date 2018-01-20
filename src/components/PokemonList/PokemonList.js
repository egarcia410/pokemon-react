import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions/index';
import { Button } from 'react-bootstrap';

import './PokemonList.css';


class PokemonList extends Component {

    returnToTown() {
        this.props.history.push('/town');
    };

    onRemovePokemon(e) {
        if (this.props.playerPokemon.length > 1) {
            this.props.removePokemon(e.target.value);
        };
    };

    render() {
        let pokemonList = (
            this.props.playerPokemon.map((pokemon, index) => {
                return (
                    <div className="col PokeBox" key={pokemon.id}>
                        <img className="pokemon" src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.name.toLowerCase()}.png`} alt={pokemon.name} />
                        <h2>{pokemon.name.toUpperCase()}</h2>
                        <h4>Level: {pokemon.level}</h4>
                        <h4>Health: {pokemon.currentHealth}/{pokemon.maxHealth}</h4>
                        <h4>Damage: {pokemon.attackDamage}</h4>
                        <h4>Type: {pokemon.type}</h4>
                        <Button value={index} onClick={(e) => this.onRemovePokemon(e)} bsStyle="danger">Remove Pokemon</Button>
                    </div>
                )
            })
        )
        return (
            <div className="PokemonListWrapper">
                <Button onClick={() => this.returnToTown()} bsStyle="success">Back to Town</Button>
                <div className="row">
                    {pokemonList}
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        playerPokemon: state.player.pokemon
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removePokemon: (index) => dispatch(actions.removePokemon(index)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonList));
