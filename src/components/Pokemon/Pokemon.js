import React from 'react';
import './Pokemon.css'

const pokemon = (props) => (
    <div className="col-12 col-md-8 pokemonBox">
        <img className="pokemon" src={props.image(props.user.name)} alt={props.user.name}/>
    </div>
)

export default pokemon;