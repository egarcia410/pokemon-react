import React, { Component } from 'react';

import StarterPokemon from '../StarterPokemon/StarterPokemon';

import './SelectPokemonScreen.css';

class SelectPokemonScreen extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="title">SELECT A POKEMON!</h1>
                <div className="row">
                    <StarterPokemon />
                </div>
            </div>
        );
    };
};

export default SelectPokemonScreen;