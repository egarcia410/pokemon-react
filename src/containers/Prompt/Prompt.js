import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './Prompt.css';
import { setTimeout } from 'timers';

class Prompt extends Component {

    componentWillMount() {
        // If the battle encounter is not a gym battle
        if (!this.props.status.gymBattle) {
            let name = this.props.oppPokemon[this.props.activeOppPokemon].name;
            let message = `A wild ${name.toUpperCase()} appeared!`;
            this.props.updatePromptMessage(message);
        } else {
            let pokemonName = this.props.oppPokemon[this.props.activeOppPokemon].name;
            let gymLeader = this.props.gymLeaderNames[this.props.activeGymLeader];
            let message = `${gymLeader.toUpperCase()} sent out ${pokemonName.toUpperCase()}!`;
            this.props.updatePromptMessage(message);
        }
        setTimeout(() => {
            let name = this.props.playerPokemon[this.props.activePlayerPokemon].name;
            let message = `What will ${name.toUpperCase()} do?`;
            this.props.updatePromptMessage(message);
        }, 3000);
    };

    render() {

        return (
            <div className="col-12 col-md-8 promptBox">
                <h1>{this.props.status.promptMessage}</h1>
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
        status: state.status,
        gymLeaderNames: state.opponent.gymLeaderNames,
        activeGymLeader: state.opponent.activeGymLeader,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updatePromptMessage: (msg) => dispatch(actions.updatePromptMessage(msg)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);