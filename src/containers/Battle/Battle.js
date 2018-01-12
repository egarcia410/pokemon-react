import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../store/actions/index';
import StatusMenu from '../../containers/StatusMenu/StatusMenu';
import Pokemon from '../../containers/Pokemon/Pokemon';
import Prompt from '../../containers/Prompt/Prompt';
import ActionMenu from '../../components/ActionMenu/ActionMenu';

import './Battle.css';

class Battle extends Component {

    componentWillUnmount() {
        this.props.resetOpponent();
        this.props.resetActivePokemon();
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="battleArena">
                    {/* Opponent */}
                    <div className="row">
                        <StatusMenu/>
                        <Pokemon/>
                    </div>
                    {/* User */}
                    <div className="row" style={{alignItems: 'flex-end'}}>
                        <Pokemon isUser={true}/>
                        <StatusMenu isUser={true}/>
                    </div>
                </div>
                {/* Prompt & Actions */}
                <div className="row">
                    <Prompt/>
                    <ActionMenu history={this.props.history}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activePlayerPokemon: state.player.activePokemon,
        activeOppPokemon: state.opponent.activePokemon,
        playerPokemon: state.player.pokemon,
        oppPokemon: state.opponent.pokemon
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetOpponent: () => dispatch(actions.resetOpponent()),
        resetActivePokemon: () => dispatch(actions.resetActivePokemon()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Battle));
