import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './TownMenu.css';

class TownMenu extends Component {

    render() {

        let menu = (
            <div className="col-12 townMenu">
                <button onClick={() => this.props.pokemonList()} className="col">POKeMON</button>
                <button onClick={() => this.props.itemsList()} className="col">BAG</button>
            </div>
        )
        if (this.props.isBagOpen) {
            menu = (
                <div className="col-12 townMenu">
                    <button onClick={() => this.props.pokemonList()} className="col">POKeMON</button>
                    <button onClick={() => this.props.itemsList()} className="col">BAG</button>
                </div>
            )
        }
        if (this.props.isStoreOpen) {

            menu = (
                <div className="col-12 townMenu">
                    <button name="Health" onClick={(e) => this.props.buyItem(e)} className="col">Health</button>
                    <button name="PokeBall" onClick={(e) => this.props.buyItem(e)} className="col">PokeBall</button>
                </div>
            )
        }
        return (
            <div>
                {menu}
                <div className="col-12 townMenuPrompt">
                    {this.props.message}
                </div>
            </div>
        )
    };
};

const mapStateToProps = state => {
    return {
        activePlayerPokemon: state.player.activePokemon,
        activeOppPokemon: state.opponent.activePokemon,
        playerPokemon: state.player.pokemon,
        oppPokemon: state.opponent.pokemon,
        status: state.status
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePromptMessage: (msg) => dispatch(actions.updatePromptMessage(msg)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TownMenu);