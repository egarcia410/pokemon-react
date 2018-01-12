import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions/index';
import Pokemon from '../../entities/Pokemon';
import PokemonService from '../../services/PokemonService';
import swal from 'sweetalert';

import './StarterPokemon.css';

class StarterPokemon extends Component {

    componentWillMount() {
        // Redirect player if have pokemon already
        if (this.props.player.pokemon.length > 0) {
            this.props.history.replace('/town');
        }
    }

    onSelectPokemon(name) {
        // Get pokemon info from database
        PokemonService.getPokemonByName(name)
            .then(result => {
                // Create new pokemon instance
                let pokemon = new Pokemon(
                    result.data[0].id,
                    result.data[0].name,
                    result.data[0].type,
                    result.data[0].health,
                    result.data[0].health,
                    result.data[0].attackDamage,
                    result.data[0].attackName,
                    1,
                    result.data[0].evolves
                );
                // Add pokemon instance to player's inventory
                this.props.addPlayerPokemon(pokemon);
                // Display message after player chooses pokemon
                let message = `You have chosen ${result.data[0].name}, Good luck on your journey!`
                swal('success', message, 'success')
                    .then(value => {
                        // When user clicks 'ok' button, redirect player to town map
                        this.props.history.replace('/town');
                    });
            })
            .catch(error => {
                console.log(error);
            })
    };
    
    render() {
        let starterPokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
        let pokemon = starterPokemon.map((pokemon, index) => {
            return (
                <div className="col pokemonBox hvr-grow" key={index} onClick={() => this.onSelectPokemon(pokemon)}>
                    <img className="pokemon" src={`https://img.pokemondb.net/sprites/x-y/normal/${pokemon.toLowerCase()}.png`} alt={pokemon} />
                    <h2 className={this.props.class}>{pokemon.toUpperCase()}</h2>
                </div>
            );
        });
        return pokemon;
    };
};

const mapStateToProps = state => {
    return {
        player: state.player
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayerPokemon: (pokemon) => dispatch(actions.addPlayerPokemon(pokemon)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StarterPokemon));
