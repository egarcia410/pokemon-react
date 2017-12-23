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
                    <img className="pokemon" src={this.convertImage(this.props.user.name)} alt={this.props.user.name}/>
                </div>
            )
        } else {
            return (
                <div className="col-12 col-md-8 pokemonBox">
                    <img className="pokemon" src={this.convertImage(this.props.opp.name)} alt={this.props.opp.name}/>
                </div>     
            )    
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        opp: state.opponent
    };
}

export default connect(mapStateToProps)(Pokemon);