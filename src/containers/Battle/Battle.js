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

    // User proofing, won't allow a user to acces battle scene without
    // first having a pokemon
    componentWillMount() {
        if (this.props.playerPokemon.length === 0) {
            this.props.history.replace('/');
        };
    }

    // Resets battle state after battle is over
    componentWillUnmount() {
        this.props.resetOpponent();
        this.props.resetActivePokemon();
        this.props.revivePokemon();
        this.props.updateActiveStatus(true); 
    };

    render() {
        if (this.props.playerPokemon.length !== 0) {
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
        } else {
            return (
                <h1>You will be redirected inorder to select starting pokemon!</h1>
            )
        }
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
        revivePokemon: () => dispatch(actions.revivePokemon()),
        updateActiveStatus: (status) => dispatch(actions.updateActiveStatus(status))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Battle));
